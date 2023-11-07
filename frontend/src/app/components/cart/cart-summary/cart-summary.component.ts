import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {

  @Input() cart!: Cart;

  constructor() {}

}
