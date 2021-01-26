import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true

  constructor(private server:ServiceService) { }

  ngOnInit(): void {
    this.user()
  }

  sideBar() {
    this.sideBarOpen = !this.sideBarOpen
  }

  user(){
    this.server.usuarioLogado().subscribe((res)=>console.log(res,"aqui"))
  }

}
