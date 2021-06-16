import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import {MatDialog} from '@angular/material/dialog';
import {ListaVendasCombosComponent} from '../combos/lista-vendas-combos/lista-vendas-combos.component'

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.scss']
})

export class CombosComponent implements OnInit {
  selectedservicos:any
  typesOfShoes: string[] = ['Carbox', 'MS.Modeladora', 'MS.turbinada', 'Drenagem', 'Endermo', 'Pump', 'C.russa', 'Ultrasom', 'Rádio', 'EnzimaIntr', 'EnzimaSub'];
  entrada:any
  valorTotal:any
  devedor:any 
  form: any
  id:any
  formulario2:any
  constructor(private formulario:FormBuilder,private service:ServiceService,private dialog:MatDialog) { 

    this.form = this.formulario.group({
          cliente:["",Validators.required],
          contato:["",Validators.required],
          valorTotal:["",Validators.required],
          valorEntrada:["",Validators.required],
          valorDevedor:["",Validators.required],
          pagamento:["",Validators.required],
          sessoes:[0,Validators.required],
          servicos:["",Validators.required],
    })

    
  }

  

  ngOnInit(): void {

  }

  Dialog(){
   return this.service.openDialog(ListaVendasCombosComponent)
  }

 


  cadastrar(){
    this.devedor = this.valorTotal - this.entrada 
     this.formulario2 = {
      cliente:this.form.value.cliente,
      contato:this.form.value.contato,
      valorTotal:this.form.value.valorTotal,
      valorEntrada:this.form.value.valorEntrada,
      valorDevedor:this.devedor,
      servicos:this.typesOfShoes,
      sessoes:this.form.value.sessoes

    }
    console.log(this.formulario2)
    this.service.insertCombo(this.formulario2).subscribe((result)=>console.log(result))
    this.limpar()
    
  }

  limpar(){
    this.form.reset()

  }


  allCombo(){
    this.service.todosCombos().subscribe((res)=>{
      this.id = res
    })
  }

}
