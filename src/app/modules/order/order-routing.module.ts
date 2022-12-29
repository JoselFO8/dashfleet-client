import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [ 
  {
    path: '', 
    component: OrderFormComponent,
  }, 
  {
    path: ':id',
    component: OrderDetailComponent,
  }
]; 

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }