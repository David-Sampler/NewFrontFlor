import { Component, OnInit ,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ServiceService } from 'src/app/service.service';
import {FinalizarComboComponent} from './finalizar-combo/finalizar-combo.component'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-upload-combo',
  templateUrl: './upload-combo.component.html',
  styleUrls: ['./upload-combo.component.scss']
})
export class UploadComboComponent implements OnInit {

  cliente:any

  panelOpenState = false;
  constructor(private route: ActivatedRoute, private service: ServiceService, private dialog:MatDialog) { }


  ngOnInit(): void {
    this.paramantro()
  }

  paramantro() {

    let c = this.route.snapshot.paramMap.get('id')
    let todos

    this.service.todosCombos().subscribe(res => {
      todos = res
      todos.filter((r: any) => {
        if (r._id === c) {
          console.log(r)
         this.cliente = r
        }
      })
    })



  }

 /* openDialog() {
    let dialogRef = this.dialog.open(FinalizarComboComponent,{width:'30%'})
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }*/
}
