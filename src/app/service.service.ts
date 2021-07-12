import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ListaVendasCombosComponent } from './module/combos/lista-vendas-combos/lista-vendas-combos.component';

@Injectable({
  providedIn: 'root'

})

export class ServiceService {
  private url = "https://decent-tracer-282620.nn.r.appspot.com"
  //private url = 'http://localhost:3000'

  constructor(private _snackBar: MatSnackBar, private http: HttpClient, private dialog: MatDialog) {

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //clientes

  getCliente(): Observable<any> {
    return this.http.get<any>(this.url + "/allcliente")
  }

  postCli(dados: any): Observable<any> {
    return this.http.post<any>(`${this.url}/insertcliente`, dados)
  }

  //user

  Login(dados: any): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, dados)
  }

  usuarioLogado(): Observable<any> {
    return this.http.get<any>(`${this.url}/logarUsuario`)
  }

  //vendas

  Insertvendas(dados: any): Observable<any> {
    return this.http.post<any>(`${this.url}/insertvendas`, dados)
  }

  AllVendas():Observable<any>{
   return this.http.get<any>(`${this.url}/allvendas`)

  }

  msg(message: string, action: string, horizontalPosition: MatSnackBarHorizontalPosition) {
    this._snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: horizontalPosition,
      panelClass: "success-dialog"
    });
  }

  allbronze(): Observable<any> {
    return this.http.get(`${this.url}/allbronze`, this.httpOptions)
  }

  insertBronze(dados: any): Observable<any> {
    return this.http.post<any>(`${this.url}/insertVendas`, dados)
  }

  insertCombo(dados: any): Observable<any> {
    return this.http.post<any>(`${this.url}/insertcombo`, dados)
  }

  todosCombos(): Observable<any> {
    return this.http.get<any>(`${this.url}/todosCombos`)
  }

  filterBronze(dados: any): Observable<any> {
    console.log("chegando no BRONZE")
    return this.http.post<any>(`${this.url}/filtrobronze`, dados)
  }

  filterCombo(cliente: any): Observable<any> {
    console.log("chegando")
    return this.http.post<any>(`${this.url}/filtroCombo`, { cliente })
  }

  openDialog(view: any) {
    let dialogRef = this.dialog.open(view, { width: '80%' })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }  
  
  alteraVenda(id: any, dado:any): Observable<any> {
    console.log("chegando nessa parte")
    return this.http.put<any>(`${this.url}/atualizavenda/${id}`,{valor:dado})
  }


}
