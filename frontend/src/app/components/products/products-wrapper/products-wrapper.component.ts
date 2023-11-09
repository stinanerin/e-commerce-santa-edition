import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.scss']
})
export class ProductsWrapperComponent {

  @Input() products: Product[] = []

  constructor(
    private _router: Router
  ){}

  navigateToProductDetails(product: Product):void {
    this._router.navigate(["/products", product.id], { state: { data: product } })
  }

}
