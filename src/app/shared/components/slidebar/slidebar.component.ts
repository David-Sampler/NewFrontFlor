import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent implements OnInit {

  public logado:any
  obj:any
  constructor(private service:ServiceService) { 

  }

  ngOnInit(): void {
      this.allUser()
  }
 
  allUser(){
    this.service.usuarioLogado().subscribe((res)=>{
      this.obj = res
      this.logado = res.permissoes
    })
  }

}
