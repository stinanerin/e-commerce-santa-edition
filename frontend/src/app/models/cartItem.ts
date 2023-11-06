import { Product } from "./product";

export class CartItem {
    quantity: number = 1;
    price: number = this.product.price;
    // Add accessmodifier to remove repetetive code
    constructor(
        public product: Product
    ){}
}