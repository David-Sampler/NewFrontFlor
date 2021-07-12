import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent implements OnInit {

  public logado:any

  img = ['assets/May.jpg','assets/LE.jpg','assets/avatar.png']
  obj:any

  imgselecionada:any

  constructor(private service:ServiceService) { 

  }

  ngOnInit(): void {
      this.allUser()
  }
 
  allUser(){
    this.service.usuarioLogado().subscribe((res)=>{
      this.obj = res.nome
      this.logado = res.permissoes

      if(this.obj === 'LETICIA'){
        this.imgselecionada = this.img[1]
      if(this.obj === 'MAYARA'){
        this.imgselecionada = this.img[0]
      }
      }else{
        this.imgselecionada = this.img[0]
      }


    })
  }

}
