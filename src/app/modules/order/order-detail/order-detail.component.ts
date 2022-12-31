import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/api/order.service';
import { IOrder } from '../order-form/iorder.metadata';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit{
  public order?: IOrder | undefined
  public id: string

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.orderService.getOrderById(this.id).subscribe(
      r => {
        this.order = r.data
      }
    )
  }
}
