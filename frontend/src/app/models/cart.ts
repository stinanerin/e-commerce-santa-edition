import { CartItem } from "./cartItem"

export class Cart {
    items: CartItem[] = [];

    // new Cart()
    totalPrice: number = 0;
    totalItems: number = 0;
}