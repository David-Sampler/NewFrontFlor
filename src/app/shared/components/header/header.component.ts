import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {

  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit()
  }

  sair(){ 
    this.router.navigate(['/'])
    localStorage.clear();
   
  }

}
