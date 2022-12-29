import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { 
  //   path: '', 
  //   redirectTo: '',
  //   pathMatch: 'full', 
  // },
  {
    path: 'order', 
    loadChildren: () => import('../app/modules/order/order.module').then((m) => m.OrderModule)
  },
  {
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full', 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
