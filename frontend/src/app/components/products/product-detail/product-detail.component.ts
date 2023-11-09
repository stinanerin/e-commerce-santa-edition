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
  isFieldsetDisabled: boolean = false;
  private _productIsInCart: CartItem | undefined;

  
  constructor(
      private _formBuilder: FormBuilder,   
      private _cartService: CartService, 
  ) {}

  ngOnInit() {
    
    this.productForm = this._formBuilder.group({
      // initialize the form control with the initial value
    });
    
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
    console.log("checkFieldsetDisabled")
    this.checkIsProductInCart()
    if (this.productIsInCart) {
      console.log("productIsInCart")
      this.isFieldsetDisabled = this.totalBookedQty >= this.product.stock;
      
    } else {
      console.log("else: false")
      this.isFieldsetDisabled = false;
    }
  }
  

  addToCart() {
    if (this.totalBookedQty > this.product.stock) {
      return;
    }

    this._cartService.addToCart(this.product, this.quantity)
    this.buttonText = "Added"

    this.checkFieldsetDisabled();

  }

  updateQuantity(value: number) {
    this.quantity = value;
  }
  
}