import { Product } from "./product";
// todo : getters and setters
export class CartItem {
    private _quantity: number;
    private _totalPrice: number;
    
    // Add accessmodifier to remove repetetive code
    constructor(readonly product: Product, _quantity: number = 1) {
        this.product = product;
        this._quantity = _quantity;
        this._totalPrice = this._quantity * this.product.price;
    }

    get totalPrice() {
        return this._totalPrice
    }
    get quantity() {
        return this._quantity
    }
    set quantity(qty: number) {
        this._quantity = qty
        this.updateTotalPrice();

    }
    
    updateTotalPrice():void {
        const newTotal = this._quantity * this.product.price; 
        this._totalPrice = newTotal 
    }
}