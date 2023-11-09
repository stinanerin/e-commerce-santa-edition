import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})

export class NotFoundPageComponent {

  @Input() notFoundMessage: string = " we were unable to find the page you were looking for."
  @Input() CTA: string = " Go back to the homepage."
  @Input() statusCode: number = 404

}
