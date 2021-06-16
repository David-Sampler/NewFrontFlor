import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './layout/default/default.module';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card';
import { VendasComponent } from './module/vendas/vendas.component';
import { ClientesComponent } from './module/clientes/clientes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NgxMaskModule } from 'ngx-mask';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TokenInterceptorService } from '../app/guards/token-interceptor.service'
import { LOCALE_ID } from '@angular/core';
import { VendaBronzeComponent } from './module/venda-bronze/venda-bronze.component';
import { CombosComponent } from './module/combos/combos.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ListaVendasCombosComponent } from './module/combos/lista-vendas-combos/lista-vendas-combos.component'
import { MatDialogModule } from '@angular/material/dialog';
import { UploadComboComponent } from './module/combos/upload-combo/upload-combo.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FinalizarComboComponent } from './module/combos/upload-combo/finalizar-combo/finalizar-combo.component';
import { MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    VendasComponent,
    ClientesComponent,
    LoginComponent,
    VendaBronzeComponent,
    CombosComponent,
    ListaVendasCombosComponent,
    UploadComboComponent,
    FinalizarComboComponent,
    
  ],
  imports: [
    MatExpansionModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule, MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule, FormsModule, MatChipsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    NgxMaskModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide:MatDialogRef,
    useValue: {}
  },
  {
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
