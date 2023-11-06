import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  product?: Product;

  // Dependency injection
  constructor(
    /* 
      ActivatedRoute component contains all the info abouit the current http request
      Including to get product id in current url
    */
    private _route: ActivatedRoute,
    // Service for fetching products
    private _service: ProductsService,
    // Router module in angular, used to retrieve state data passed when a user navigates from the product grid
    private _router: Router

  ){
    // No methods inside constructor -  not accessible from unit testing
    console.log("route", _route.snapshot)
  }

  ngOnInit(): void {

    const lastSuccessfulNavigation = this._router.lastSuccessfulNavigation;

    if (lastSuccessfulNavigation?.extras.state) {
      const productData = lastSuccessfulNavigation?.extras.state["data"]
      
      this.product = productData;
    } else {
      // Fetch the product if no data is passed
      console.log("no product data passed, fetched product instead")
      this.getProduct()
    }
  }

  getProduct():void {
    // Snapshot is on ActivatedRoute-component
    // "id" is the param in the url
    const productId = Number(this._route.snapshot.paramMap.get("id"))

    this._service.getProductById(productId).subscribe(productObj => this.product = productObj)
  
  }
}
