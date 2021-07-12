import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import * as moment from 'moment';
import { ListaVendasCombosComponent } from '../combos/lista-vendas-combos/lista-vendas-combos.component'

@Component({
  selector: 'app-resumos-vendas',
  templateUrl: './resumos-vendas.component.html',
  styleUrls: ['./resumos-vendas.component.scss']
})
export class ResumosVendasComponent implements OnInit {
  todos: any
  total: number = 0
  quantidade: number = 0
  quantidadeAnterior: number = 0

  dataMes = moment().format('MM');

  vendasTotalCombo = 0
  vendasEstetica = 0

  bronzeMesAtual: any = []
  TotalComboMesAnterior = 0

  vendaComboMesAtual: any = 0
  vendaEsteticageralMes: any = 0

  valorTotalMesAnterior: any = 0
  valorTotalMesAnteriorEstetica = 0
  MesPassadoBronze = 0

  vendasTotalEsteticaMesAnterior = 0

  totalCombos = 0
  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.allBronze()
    this.vendasCombos()
    this.vendasEsteticaGeral()
  }


  allBronze() {
    this.service.allbronze().subscribe((r) => {
      this.todos = r
      this.quantidade = r.length
      // let data = r.criando    

      this.todos.filter((res: any) => {
        let data = res.criado.split('T')[0].split('-')[1]
        var startdate = moment();
        let dataanterior = startdate.subtract(1, "months").calendar();

        if (data === this.dataMes) {
          this.total += res.valor
        }

        if (data === this.dataMes) {
          this.bronzeMesAtual.push(res)
        }

        if (data == dataanterior.split('/')[0]) {
          this.MesPassadoBronze += res.valor
          console.log(this.quantidadeAnterior, "Bronzes")
        }

      })

    })


  }

  vendasCombos() {
    this.service.todosCombos().subscribe((res) => {
      let vendas = res
      vendas.filter((r: any) => {
      
        var startdate = moment();
        let dataanterior = startdate.subtract(1, "months").calendar();

        this.vendasTotalCombo += r.valorTotal
        let data = r.criado.split('T')[0].split('-')[1]

        if (this.dataMes == data) {
          console.log(r)
          this.vendaComboMesAtual += r.valorTotal
         
        }

        if (data == dataanterior.split('/')[0]) {
          this.valorTotalMesAnterior += r.valorTotal
          this.TotalComboMesAnterior = r.length

        }
      })


    })
  }

  vendasEsteticaGeral() {
    this.service.AllVendas().subscribe((res) => {
      let vendas = res

      var startdate = moment();
      let dataanterior = startdate.subtract(1, "months").calendar();

      vendas.filter((r: any) => {
        let data = r.criado.split('T')[0].split('-')[1]
        if (this.dataMes == data) {
          this.vendaEsteticageralMes += r.totalVenda
        }

        if (data == dataanterior.split('/')[0]) {
          this.valorTotalMesAnteriorEstetica += r.totalVenda
          
        }

      }


      )
    })
  }

}
