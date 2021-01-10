import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { ClientesComponent } from './module/clientes/clientes.component';
import { PostComponent } from './module/post/post.component';
import { VendasComponent } from './module/vendas/vendas.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: "posts",
    component: PostComponent
  }, {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path: "vendas",
    component: VendasComponent
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
