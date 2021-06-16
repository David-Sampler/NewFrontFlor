import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../service.service'
'../'
@Component({
  selector: 'app-lista-vendas-combos',
  templateUrl: './lista-vendas-combos.component.html',
  styleUrls: ['./lista-vendas-combos.component.scss']
})

export class ListaVendasCombosComponent implements OnInit {
  todos: any

  datas: any
  lista: any

  formulario: any


  constructor(private service: ServiceService,
    private FormBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ListaVendasCombosComponent>) {
    this.formulario = FormBuilder.group({
      cliente: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.todosClientes()
   
  }

  closeDialog() {
    this.dialogRef.close();
  }

  todosClientes() {

    this.service.todosCombos().subscribe((result) => {
      this.todos = result.reverse()
      this.todos.forEach((element: any) => {
        this.datas = element.criado.split('T')[0].split('-').reverse().join('/')
        console.log(this.datas)
      });
      console.log(this.todos)
    })

  }


  filtro() {
    console.log(this.formulario.value.cliente)
    this.service.filterCombo(this.formulario.value.cliente).subscribe((res) => {
      this.lista = res.reverse()
    })
  }

  veUser(id: any) {
    console.log(id)
    this.router.navigate(['/default/atualizarCombos', id], { relativeTo: this.route });
    this.closeDialog()
  }

}
