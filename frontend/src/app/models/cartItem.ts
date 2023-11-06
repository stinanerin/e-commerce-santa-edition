import { Product } from "./product";
// todo : getters and setters
export class CartItem {
    totalPrice: number;
    
    // Add accessmodifier to remove repetetive code
    constructor(readonly product: Product, public quantity: number) {
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = this.quantity * this.product.price;
    }
    
    updateTotalPrice():void {
        const newTotal = this.quantity * this.product.price; 
        this.totalPrice = newTotal 
    }
}