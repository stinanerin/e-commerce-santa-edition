import { fakeAsync, tick } from '@angular/core/testing';

import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

import { CheckoutPageComponent } from '../pages/checkout-page/checkout-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { ProductDetailPageComponent } from '../pages/product-detail-page/product-detail-page.component';
import { ProductGalleryPageComponent } from '../pages/product-gallery-page/product-gallery-page.component';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule.withRoutes([]), HttpClientModule, HttpClientTestingModule],
      declarations: [ProductGalleryPageComponent, ProductDetailPageComponent, CheckoutPageComponent, NotFoundPageComponent],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it("should redirect you to products when you navigate to ''", fakeAsync(() => {
    router.navigate([""])
    tick();

    expect(location.path()).toBe("/products")
  }))

  it("should render ProductGalleryPageComponent when you navigate to '/products'", fakeAsync(() => {
    router.navigate(["/products"])

    tick()

    expect(location.path()).toBe("/products")

    fixture = TestBed.createComponent(ProductGalleryPageComponent)
    const ProductGalleryComponent = fixture.componentInstance;
    expect(ProductGalleryComponent).toBeTruthy()

  }))

  it("should render ProductDetailPageComponent when you navigate to '/products/:id'",  fakeAsync(() => {
    const productId = 1
    router.navigate([`/products/${productId}`])

    tick()

    expect(location.path()).toBe(`/products/${productId}`)

    fixture = TestBed.createComponent(ProductDetailPageComponent)
    const ProductDetailComponent = fixture.componentInstance
    expect(ProductDetailComponent).toBeTruthy()
    
  }))

  it("should render CheckoutPageComponent when you navigate to '/checkout'",  fakeAsync(() => {
    
    router.navigate(["/checkout"])

    tick()

    expect(location.path()).toBe("/checkout")

    fixture = TestBed.createComponent(CheckoutPageComponent)
    const CheckoutComponent = fixture.componentInstance
    expect(CheckoutComponent).toBeTruthy()

  }))


  it("should render CheckoutPageComponent when you navigate to '/checkout'",  fakeAsync(() => {

    router.navigate(["/route-does-not-exists"])

    tick()

    expect(location.path()).toBe("/route-does-not-exists")

    fixture = TestBed.createComponent(NotFoundPageComponent)
    const NotFoundComponent = fixture.componentInstance
    expect(NotFoundComponent).toBeTruthy()

  }))

});
