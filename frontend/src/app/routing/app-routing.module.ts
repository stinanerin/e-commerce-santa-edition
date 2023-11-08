import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from '../pages/checkout-page/checkout-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { ProductDetailPageComponent } from '../pages/product-detail-page/product-detail-page.component';
import { ProductGalleryPageComponent } from '../pages/product-gallery-page/product-gallery-page.component';

const routes: Routes = [
  {
    path: "",  redirectTo: "/products", pathMatch: "full"
  },
  {
    path: "products", 
    component: ProductGalleryPageComponent
  },
  {
    path: "products/:id", 
    component: ProductDetailPageComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent
  },
  {
    path: "**", 
    component: NotFoundPageComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
