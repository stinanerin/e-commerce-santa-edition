import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  cart!: Cart;

  constructor(
    private _cartService: CartService
  ){}

  ngOnInit(): void {
    this._cartService.getCartObservable().subscribe(cartObj => {
      this.cart = cartObj
    })
  }

}
