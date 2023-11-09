import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qty-controller',
  templateUrl: './qty-controller.component.html',
  styleUrls: ['./qty-controller.component.scss']
})
export class QtyControllerComponent {

  @Input() quantity!: number;
  @Input() stock!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();


  constructor() {}

  increaseQty() {
    if (this.stock > 0) {

      this.quantity++;
      this.quantityChange.emit(this.quantity);

    }
  }

  decreaseQty() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

}
