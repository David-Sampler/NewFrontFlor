import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map } from 'rxjs/operators'
import { pipe, from, } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { MatAccordion } from '@angular/material/expansion';
import {ListaclientesBronzeComponent} from '../venda-bronze/listaclientes-bronze/listaclientes-bronze.component'

@Component({
  selector: 'app-venda-bronze',
  templateUrl: './venda-bronze.component.html',
  styleUrls: ['./venda-bronze.component.scss']
})

export class VendaBronzeComponent implements OnInit {


  form: any
  datahoje: any = new Date().toLocaleDateString().split('/')[1]

  mesAtual: any

  pagamento: any;
  favoriteSeason: any;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  totaldoDia:Array<any>=[]
  totaldebronzeHoje = 0
  totalBronzeMes: any = []
  ar: any = []

  numerosDeBronze = 0

  constructor(private formulario: FormBuilder, private service: ServiceService) {
    this.form = this.formulario.group({
      cliente: ['', Validators.required],
      valor: ['', Validators.required],
      contato: ['', Validators.required],
      pagamento: [this.favoriteSeason]
    })
  }


  ngOnInit(): void {
    this.buscarTodosBronzeMes()
    this.PegarTodosMesAtual()

  }
  PegarTodosMesAtual() {
    this.service.allbronze().subscribe((res) => {
      let todos = res
      todos.filter((resultante: any) => {
        if (this.datahoje === resultante.criado.split('T')[0].split('-')[1]) {
          this.totalBronzeMes.push(resultante)
        }
      })
    })
  }


  buscarTodosBronzeMes() {
    this.service.allbronze().subscribe((res) => {

      res.filter((element: any) => {

        let date = (element.criado.split('T')[0].split('-').reverse().join('/'))

        if (this.data() === date) {

          this.totaldoDia.push(element)

          this.totaldebronzeHoje += element.valor
          this.numerosDeBronze = this.totaldoDia.length

        } 
      });
    })

  }

  data() {
    let data = new Date().toLocaleDateString()
    return data
  }

  cadastraservico() {
    this.service.insertBronze(this.form.value).subscribe(res => {
      console.log(res)
      this.limparCampos()
      this.mensagem()
    })
  }

  mensagem() {
    this.service.msg("Venda realizada", "center", 'center')
  }

  limparCampos() {
    this.form.reset()
  }

  filtro() {
    console.log(this.form.value.cliente)
    this.service.filterBronze(this.form.value.cliente).subscribe((res) => {
      console.log(res)
    })
  }

  buscarcli(){
   this.service.openDialog(ListaclientesBronzeComponent)
  }
}




