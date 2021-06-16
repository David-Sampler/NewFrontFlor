import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map } from 'rxjs/operators'
import { pipe, from, } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { MatAccordion } from '@angular/material/expansion';


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

  totaldoDia: any = []
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
    this.buscarTodosBronze()
    this.TodosDoDia()
    this.PegarTodosMesAtual()
    
  }

  TodosDoDia() {

    this.service.allbronze().subscribe(res => {

      res.filter((resultado: any) => {
        if (resultado.criado == this.data()) {
          //this.totaldebronzeHoje.push(resultado)
        }
      })



    });



  }



  PegarTodosMesAtual() {
    this.service.allbronze().subscribe((res) => {
      let todos = res
      console.log(this.datahoje)
      todos.filter((resultante: any) => {
        if (this.datahoje === resultante.criado.split('T')[0].split('-')[1]) {
          this.totalBronzeMes.push(resultante)
        }
      })
    })
  }


  buscarTodosBronze() {
    this.service.allbronze().subscribe((res) => {

      res.filter((element: any) => {

        let date = (element.criado.split('T')[0].split('-').reverse().join('/'))

        if (this.data() === date) {

          this.totaldoDia.push(element)

          this.totaldebronzeHoje += element.valor
          this.numerosDeBronze = this.totaldoDia.length
          //console.log(this.totaldoDia.length)

        } else {
          this.totaldoDia = 0
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
}




