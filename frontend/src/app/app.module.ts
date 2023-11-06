import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductGalleryPageComponent } from './pages/product-gallery-page/product-gallery-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { ProductsWrapperComponent } from './components/products/products-wrapper/products-wrapper.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { QtyControllerComponent } from './components/ui/qty-controller/qty-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductGalleryPageComponent,
    ProductDetailPageComponent,
    CheckoutPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    ProductsWrapperComponent,
    ProductCardComponent,
    ProductDetailComponent,
    CartItemComponent,
    QtyControllerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
