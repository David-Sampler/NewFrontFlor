import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../service.service'
@Component({
  selector: 'app-detalhes-vendas',
  templateUrl: './detalhes-vendas.component.html',
  styleUrls: ['./detalhes-vendas.component.scss']
})
export class DetalhesVendasComponent implements OnInit {
  displayedColumns: string[] = ['criado','cliente','vendedor','contato', 'valor'];
  dataSource = []
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.pegadados()
  }

  pegadados(){
    this.service.AllVendas().subscribe((res)=>{
      console.log(res)
      this.dataSource = res.reverse()
      console.log(this.dataSource)
      
    })
  }

}

