import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(
      private _formBuilder: FormBuilder,   
      private _cartService: CartService, 
  ) {}

  ngOnInit() {
    this.productForm = this._formBuilder.group({
      // todo
    });
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQty() {
    this.quantity++;
  }

  addToCart() {

    console.log(`Added ${this.quantity} ${this.product.name} to the cart.`);
    this._cartService.addToCart(this.product, this.quantity)
  
  }
  
}