import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-gallery-page',
  templateUrl: './product-gallery-page.component.html',
  styleUrls: ['./product-gallery-page.component.scss']
})
export class ProductGalleryPageComponent implements OnInit{

  products: Product[] = [];

  constructor(
    private _service: ProductsService,
  ) {}

  ngOnInit(): void {
      this.getProducts()
  }

  getProducts() {
    this._service.getAllProducts().subscribe(data => this.products = data)
    
  }

}
