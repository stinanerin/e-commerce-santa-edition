import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent  {

  navbarFixed: boolean = true;
  prevScrollPos: number = 0;

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
  ){}


}