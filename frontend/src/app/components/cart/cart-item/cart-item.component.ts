import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() cartItem!: CartItem;
  @Output()itemQuantityChange: EventEmitter<number> = new EventEmitter<number>();


  constructor(
    private _cartService: CartService,
    private _router: Router
  ) {}

  updateCartQtyStorage(newQuantity: number): void {
    const parsedQuantity = parseInt(newQuantity.toString(), 10);

    if (!isNaN(parsedQuantity)) {
      this.cartItem.quantity = parsedQuantity;
      this._cartService.updateCartItemTotal(this.cartItem.product.id);
    } else {
      console.error("Invalid quantity:", newQuantity);
    }

  }

  removeCartItem() {
    this._cartService.removeFromCart(this.cartItem.product.id)
  }

  navigateToProductDetail(id: number) {

    this._router.navigate(["/products/", + id])

  }

}
