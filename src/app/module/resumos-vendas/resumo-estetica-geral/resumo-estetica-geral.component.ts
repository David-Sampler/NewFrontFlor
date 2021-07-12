import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import {DetalhesVendasComponent} from '../../../module/vendas/detalhes-vendas/detalhes-vendas.component'
import * as moment from 'moment';

@Component({
  selector: 'app-resumo-estetica-geral',
  templateUrl: './resumo-estetica-geral.component.html',
  styleUrls: ['./resumo-estetica-geral.component.scss']
})
export class ResumoEsteticaGeralComponent implements OnInit {

  @Input() vendasGeral:any
  @Input() totalMesAnterior:any
  dataatual = moment().format('MM'); // 'today Sunday'
  
  dataanterior = moment().subtract(1, "months").calendar();
  

 
  @Input() ValorAnteriorEstetica = 0
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    
  }


  detalhesvendas(){
   this.service.openDialog(DetalhesVendasComponent)
  }

}
