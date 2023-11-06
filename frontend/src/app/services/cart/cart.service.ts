import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { BehaviorSubject, Observable } from 'rxjs'
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cartItem';

@Injectable({
  // Able to inject on root level
  providedIn: 'root'
})

export class CartService {

  private cart: Cart = this.getCartFromLocalStorage()
  // BehaviorSubject: acts as a single store to hold updated shared data
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  
  constructor(){}

  getCartObservable(): Observable<Cart> {
    // We send it as observable instead of just subject, 
    // since we are able to manipulate subjects outside of the class
    return this.cartSubject.asObservable()
  }

  addToCart(product: Product, qty: number): void {

    const cartItemAlreadyExists = this.cart.items.find(cartItem => cartItem.product.id === product.id)

    if(cartItemAlreadyExists) {

      cartItemAlreadyExists.quantity + qty;
      this.updateCartItemQuantity(cartItemAlreadyExists.product.id, cartItemAlreadyExists.quantity)
      
    } else {
      const newCartItem = new CartItem(product)
      newCartItem.quantity = qty
      this.cart.items.push(newCartItem)
    }

    this.setCartToLocalStorage()

  }

  updateCartItemQuantity(productId: number, quantity: number):void {
    const cartItem = this.cart.items.find(cartItem => cartItem.product.id === productId)
    console.log("cartItem", cartItem)

    if(!cartItem) return

    cartItem.quantity = quantity

    const newTotal = quantity * cartItem.product.price
    cartItem.price = newTotal

    this.setCartToLocalStorage()
  }



  // private: The method is not accessible otuside of the class
  // i.e: we only use it inside
  private setCartToLocalStorage(): void {

    // Reduce loops through array
    // the function passed to reduce will be called for each item
    // 0 = default value for prevSum
    const newTotalCartPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    
    this.cart.totalPrice = newTotalCartPrice

    const newTotalCartQty = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0)

    this.cart.totalItems = newTotalCartQty

    const cartJson = JSON.stringify(this.cart)
    localStorage.setItem("Cart", cartJson)


    this.cartSubject.next(this.cart)
  }

  // private: The method is no accessible otuside of the class
    // i.e: we only use it inside
  private getCartFromLocalStorage():Cart {
    const cartJson = localStorage.getItem("Cart")

    const cart = cartJson ? JSON.parse(cartJson) : new Cart()
    return cart
    
  }
}
