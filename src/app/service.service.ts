import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class ServiceService {

  private url = 'http://localhost:3000'

  constructor(private _snackBar: MatSnackBar, private http:HttpClient) { 

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //clientes

  getCliente():Observable<any>{
    return this.http.get<any>(this.url + "/allcliente")
  }

  postCli(dados:any):Observable<any>{
        return this.http.post<any>(`${this.url}/insertcliente`,dados)
  }

  //user

  Login(dados:any):Observable<any>{

        return this.http.post<any>(`${this.url}/login`,dados)
  }

  //vendas

  Insertvendas(dados:any):Observable<any>{
           return this.http.post<any>(`${this.url}/insertvendas`,dados)
  }

  msg(message: string, action: string, horizontalPosition: MatSnackBarHorizontalPosition) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: horizontalPosition,
      panelClass: "success-dialog"
    });
  }
}
