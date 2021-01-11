import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'

})

export class ServiceService {

  constructor(private _snackBar: MatSnackBar) { }

  msg(message: string, action: string, horizontalPosition: MatSnackBarHorizontalPosition) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: horizontalPosition,
      panelClass: "success-dialog"
    });
  }
}
