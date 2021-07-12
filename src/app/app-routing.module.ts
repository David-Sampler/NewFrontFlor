import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './module/clientes/clientes.component';
import { CombosComponent } from './module/combos/combos.component';
import { UploadComboComponent } from './module/combos/upload-combo/upload-combo.component';
import { ResumosVendasComponent } from './module/resumos-vendas/resumos-vendas.component';
import { VendaBronzeComponent } from './module/venda-bronze/venda-bronze.component';
import { VendasComponent } from './module/vendas/vendas.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


const routes: Routes = [

{
  path: "default",  
  component: DefaultComponent,  
  
  children: [{
    path: '',
    component: DashboardComponent
  }   
  , {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path: "vendas",
    component: VendasComponent
  },
  {
    path: "vendaBronze",
    component: VendaBronzeComponent
  },

  {
    path: "vendaCombos",
    component:CombosComponent
  },

  {
    path: "DetalhesVendas",
    component:ResumosVendasComponent
  },

  {
    path: "atualizarCombos/:id",
    component:UploadComboComponent
  },
  
  ],
 
  canActivate:[AuthGuardService]
  
},

{
  path: "",  
  component: LoginComponent,
  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
