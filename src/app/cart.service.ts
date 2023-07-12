import { HttpClient} from "@angular/common/http";
import { Product } from './products';

import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.getItems();
  }

  getShippingPrizes(){
    return this.http.get<{type:string, price:number}[]>("assets/shipping.json");
  }
}
