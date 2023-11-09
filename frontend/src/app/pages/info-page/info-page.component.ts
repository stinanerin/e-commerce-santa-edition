import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent {
  
  @Input() message: string = "Something went wrong"
  @Input() CTA: string = "Continue shopping"

}
