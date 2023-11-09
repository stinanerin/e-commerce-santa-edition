import { Component, OnInit } from '@angular/core';
import { ApiResponseError } from 'src/app/models/error';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-gallery-page',
  templateUrl: './product-gallery-page.component.html',
  styleUrls: ['./product-gallery-page.component.scss']
})
export class ProductGalleryPageComponent implements OnInit{

  products: Product[] = [];
  isLoading: boolean = false;
  error: ApiResponseError | undefined = undefined;

  constructor(
    private _service: ProductsService,
  ) {}

  ngOnInit(): void {
      this.getProducts()
  }

  getProducts() {
    this.isLoading = true

    
    this._service.getAllProducts().subscribe({
      next: (data) =>  {
        this.products = data
        this.isLoading = false
      },
      error: (error) => {
        console.log('Error:', this.error);

        this.error = error.error
        this.isLoading = false
      }
    })
    
  }

}
