import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './layout/default/default.module';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    FlexLayoutModule,
    MatButtonModule, MatCardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }