import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})


export class ProductDetailComponent implements OnInit {
  
  @Input() product!: Product;
  
  quantity: number = 1;
  buttonText: string = 'Add to cart';
  isFieldsetDisabled: boolean = false;
  private _productIsInCart: CartItem | undefined;

  
  constructor(
      private _cartService: CartService, 
  ) {}

  ngOnInit() {
        
    this.checkIsProductInCart()
    this.checkFieldsetDisabled();

  }

  get totalBookedQty(): number {
    if (this.productIsInCart) {
      
      return this.quantity + this.productIsInCart.quantity;
    } else {

      return this.quantity;
    }
  }

  get productIsInCart(): CartItem | undefined {
    return this._productIsInCart;
  }

  set productIsInCart(cartItem: CartItem | undefined) {
    this._productIsInCart = cartItem;
  }

  checkIsProductInCart() {
    this.productIsInCart = this._cartService.getCartItemById(this.product.id);
  }

  checkFieldsetDisabled() {
    console.log("checkFieldsetDisabled", this.isFieldsetDisabled)
    this.checkIsProductInCart()
    if (this.productIsInCart) {
      this.isFieldsetDisabled = this.totalBookedQty > this.product.stock && this.productIsInCart.quantity === this.product.stock;
      
    } else {
      this.isFieldsetDisabled = false;
    }
  }
  
  addToCart() {

    if (this.totalBookedQty > this.product.stock) {
      this.checkFieldsetDisabled();

      return;
    }

    this._cartService.addToCart(this.product, this.quantity)

    this.checkFieldsetDisabled();

  }

  updateQuantity(value: number) {
    this.quantity = value;
  }
  
}