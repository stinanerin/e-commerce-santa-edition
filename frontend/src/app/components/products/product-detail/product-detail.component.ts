import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
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
  
  productForm!: FormGroup;
  quantity: number = 1;
  buttonText: string = 'Add to cart';
  productIsInCart: CartItem | undefined;

  
  constructor(
      private _formBuilder: FormBuilder,   
      private _cartService: CartService, 
  ) {}

  ngOnInit() {
    this.productIsInCart = this._cartService.getCartItemById(this.product.id);

    this.productForm = this._formBuilder.group({
      // initialize the form control with the initial value
    });
  }

  get totalBookedQty(): number {
    if (this.productIsInCart) {
      console.log("productIsInCart", this.productIsInCart)
      console.log(this.quantity, this.productIsInCart.quantity,this.quantity + this.productIsInCart.quantity)
      console.log("ran if totalBookedQty", this.quantity + this.productIsInCart.quantity)
      return this.quantity + this.productIsInCart.quantity;
    } else {
      
      console.log("ran else totalBookedQty", this.quantity)
      return this.quantity;
    }
  }
  

  addToCart() {
    console.log("totalBookedQty", this.totalBookedQty)
    if (this.totalBookedQty > this.product.stock) {
      console.log("this.totalQuantityInCart > this.product.stock")
      return;
    }

    console.log(`Added ${this.quantity} ${this.product.name} to the cart.`);

    this._cartService.addToCart(this.product, this.quantity)
    this.buttonText = "Added"

    // todo disable fieldset when  this.totalQuantityInCart > this.product.stock is true after the alst added item
    if(this.totalBookedQty >= this.product.stock ) {
      console.log("HEJ")
      
    }
  }

  updateQuantity(value: number) {
    this.quantity = value;
  }
  
}