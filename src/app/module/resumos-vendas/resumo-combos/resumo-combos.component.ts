import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-resumo-combos',
  templateUrl: './resumo-combos.component.html',
  styleUrls: ['./resumo-combos.component.scss']
})
export class ResumoCombosComponent implements OnInit {
  
  @Input()vendasTotal = 0
  @Input() VendasMesAnterior = 0
  @Input() TotalComboMesAnterior = 0
  @Input() totalAtual = 0
  faltaReceber = 0
  dataatual = moment().format('MM'); // 'today Sunday'

  dataanterior = moment().subtract(1, "months").calendar();


  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    
  }

  

}
