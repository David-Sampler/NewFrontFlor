import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  form: FormGroup
  constructor(private formulario: FormBuilder, private ms: ServiceService) {

    this.form = formulario.group({
      nome: ["", [Validators.required]],

      contato: this.formulario.array([
        this.formulario.control("", [Validators.required])
      ])
    })



  }

  ngOnInit(): void {
    console.log(this.form)
  }

  get contato() {
    return this.form.get('contato') as FormArray
  }

  add() {
    this.contato.push(this.formulario.control(''))
  }


  cadCliente() {
    if (this.form.value.nome == "" || this.form.value.telefone == "") {
      this.ms.msg("Você precisa preencher os campos", "VALEU", "start")
    } else {
      console.log(this.form.value)
      this.ms.msg("CADASTRO REALIZADO", "SUCESSO", "end")
    }
  }

}
