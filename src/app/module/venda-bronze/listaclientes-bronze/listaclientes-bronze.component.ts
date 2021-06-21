import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';



@Component({
  selector: 'app-listaclientes-bronze',
  templateUrl: './listaclientes-bronze.component.html',
  styleUrls: ['./listaclientes-bronze.component.scss']
})


export class ListaclientesBronzeComponent implements OnInit {
  
  displayedColumns: string[] = ['criado','cliente', 'contato', 'valor'];
  dataSource = []
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.pegadados()
  }


  pegadados(){
    this.service.allbronze().subscribe((res)=>{
      
      this.dataSource = res.reverse()
      
    })
  }

}
