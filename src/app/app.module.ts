import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './layout/default/default.module';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card';
import { VendasComponent } from './module/vendas/vendas.component';
import { ClientesComponent } from './module/clientes/clientes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    VendasComponent,
    ClientesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    FlexLayoutModule,
    MatButtonModule, MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSnackBarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
