import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-resumo-bronze',
  templateUrl: './resumo-bronze.component.html',
  styleUrls: ['./resumo-bronze.component.scss']
})
export class ResumoBronzeComponent implements OnInit {

  dataatual = moment().format('MM'); // 'today Sunday'

   dataanterior = moment().subtract(1, "months").calendar();

  @Input() todos:any
  @Input() quantidade:any
  @Input() quantidadetotalAnterior:any
  @Input() totalAnterior:any
  
  constructor() { }

  ngOnInit(): void {
   this.somarBronze()
  }

  somarBronze(){
    console.log(this.todos)
      
  }

}
