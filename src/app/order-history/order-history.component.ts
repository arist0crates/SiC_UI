import { Component, OnInit } from '@angular/core';
import { Order } from "../orders/order.model";
import { OrderHistoryService } from '../order-history/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: Order[];
  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit() {
    //this.getOrders();
  }

  getOrders(): void {
    this.orderHistoryService.getOrders(20).subscribe(orders => this.orders = orders);
  }

  getOrdersbyDate(dt_init:string,dt_end:string): void {
    this.orderHistoryService.getOrdersbyDate(20,dt_init,dt_end).subscribe(orders => this.orders = orders);
  }

  getOrdersbyState(state:string): void {
    this.orderHistoryService.getOrderbyState(4,state).subscribe(orders => this.orders = orders);
  }

}
