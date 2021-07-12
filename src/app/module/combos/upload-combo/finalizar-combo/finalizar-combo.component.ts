import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-finalizar-combo',
  templateUrl: './finalizar-combo.component.html',
  styleUrls: ['./finalizar-combo.component.scss']
})
export class FinalizarComboComponent implements OnInit {

  @Input() cliente: any

  form:any
  valor: number = 0
  allcombos: any

  constructor(private formBuild:FormBuilder, private dialogRef: MatDialogRef<FinalizarComboComponent>,
     private service: ServiceService, private route: ActivatedRoute, private router:Router) {
       this.form = formBuild.group({
         valor:[0,Validators.required]
       })

   }

  ngOnInit(): void {
  
  }

  atualizar() {
    console.log(typeof (this.valor))
    console.log(this.valor)
    console.log(this.form.value.valor)
    console.log(this.cliente._id)

    this.service.alteraVenda(this.cliente._id,this.form.value.valor).subscribe((res) => {
      console.log(res, "Finalizado")
    })  
  
    this.limparDados()
    this.service.msg("Venda alterada com sucesso","Obrigado","right")

    this.router.navigate(['default/vendaCombos'])
  }



  peguetodo() {
    this.service.todosCombos().subscribe((res) => {
      this.allcombos = res
    })
  }

  limparDados(){
    this.form.reset()
  }





}
