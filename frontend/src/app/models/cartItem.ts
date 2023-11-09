import { Product } from "./product";
export class CartItem {
    private _totalPrice: number;
    
    // Add accessmodifier to remove repetetive code
    constructor(readonly product: Product, private _quantity: number = 1) {
        this.product = product;
        this._quantity = _quantity;
        this._totalPrice = this._quantity * this.product.price;
    }

    get totalPrice(): number {
        return this._totalPrice
    }
    get quantity(): number {
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