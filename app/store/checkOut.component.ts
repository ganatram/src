import { NgForm } from '@angular/forms';
import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { Component } from '@angular/core';
// import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'checkout',
  templateUrl: 'checkOut.component.html',
  standalone: false,
})
export class CheckOut {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(private repository: OrderRepository, public order: Order) {
    // order = cart service data + form data
  }

  submitOrder() {
    // post localhost:3500/orders , order

    this.repository
      .saveOrder(this.order)

      .subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
  }
}
