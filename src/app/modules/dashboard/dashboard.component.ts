import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  logado:any
  constructor(private service:ServiceService) { }
 
  ngOnInit(): void {
     this.pegaLogin()
  }

  pegaLogin(){
    this.service.usuarioLogado().subscribe((user)=>{
      console.log(user.permissoes)
      this.logado = user.permissoes
    })
  }
}
