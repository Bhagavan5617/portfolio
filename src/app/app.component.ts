import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import Swiper from 'swiper';
import * as $ from 'jquery';

interface JQuery {
  stick_in_parent(): JQuery;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent  implements OnInit {
  isStuck: boolean = false;
  elementStyles = {
    position: 'static',
    top: '0px',
    width: 'auto'
  };

  ngOnInit() {
    // Initialization logic if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 100) { // Change 100 to the desired scroll threshold
      this.isStuck = true;
      this.elementStyles = {
        position: 'fixed',
        top: '-296.787px',
        width: '422.663px'
      };
    } else {
      this.isStuck = false;
      this.elementStyles = {
        position: 'static',
        top: '0px',
        width: 'auto'
      };
    }
  }
}