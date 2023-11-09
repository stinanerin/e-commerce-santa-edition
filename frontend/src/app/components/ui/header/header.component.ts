import { Component, HostListener } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent  {

  navbarFixed: boolean = true;
  prevScrollPos: number = 0;
  cartQty: number = 0;


  @HostListener("window:scroll", ["$event"]) onScroll() {
    const currentScrollPos =  window.scrollY
    if(this.prevScrollPos > currentScrollPos ||  currentScrollPos < 86) {
      this.navbarFixed = true
    } else {
      this.navbarFixed = false
    }
    this.prevScrollPos = window.scrollY;
  }

  constructor(
    private _cartService: CartService,

  ){}

   ngOnInit(): void {
    this.getCartQty()
  }

  getCartQty() {
    this._cartService.getCartObservable().subscribe(cart => this.cartQty = cart.totalItems)
  }


}