import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippingCosts!: Observable<{ type: String; price: Number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrizes();
  }

  constructor(private cartService: CartService) {}
}
