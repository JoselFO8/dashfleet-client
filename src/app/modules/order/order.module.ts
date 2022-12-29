import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { OrderRoutingModule } from './order-routing.module';


@NgModule({
  declarations: [
    OrderFormComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderRoutingModule
  ], 
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class OrderModule { }
