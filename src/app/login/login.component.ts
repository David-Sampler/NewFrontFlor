import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  formulario: any

  constructor(private service: ServiceService, private FormBuilder: FormBuilder, private router: Router) {
    this.formulario = this.FormBuilder.group({
      nome: ['', Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Logout() {


    this.service.Login(this.formulario.value).subscribe((res) => {

      console.log(res)
     
      if (res.token) {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/default'])
      } else {        
        return this.service.msg("Nome ou Senha Inválido", "Atenção", "center")
      }






    })




  }

}
