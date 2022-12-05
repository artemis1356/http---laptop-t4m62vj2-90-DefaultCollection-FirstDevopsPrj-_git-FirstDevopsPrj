import { Injectable } from '@angular/core';
import { PartModel } from '../models/PartModel';
const cartItemsKey = 'shpping-cart-items';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}

  addToCart(part: PartModel):boolean {
    part.itemCount = 1;
    let items: PartModel[] = [];
    let result:boolean = false;
    if (localStorage.getItem(cartItemsKey)) {
      const temp: string = localStorage.getItem(cartItemsKey) ?? '';
      items = JSON.parse(temp);
      if (items.findIndex((q) => q.id == part.id) == -1) {
        items = [...items, part];
        result = true;
      }
    } else {
      result = false;
    }

    localStorage.setItem(cartItemsKey, JSON.stringify(items));
    return result;
  }

  removeFromCart(partId: number) {
    let items: PartModel[] = [];
    if (localStorage.getItem(cartItemsKey)) {
      const temp: string = localStorage.getItem(cartItemsKey) ?? '';
      items = JSON.parse(temp);
      items = items.filter(q => q.id != partId);
      localStorage.setItem(cartItemsKey, JSON.stringify(items));
    } 
  }

  getCartItems(): PartModel[] {
    let items: PartModel[] = [];
    if (localStorage.getItem(cartItemsKey)) {
      const temp: string = localStorage.getItem(cartItemsKey) ?? '';
      items = JSON.parse(temp);
    }
    return items;
  }
}
