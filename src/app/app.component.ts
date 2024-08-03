import { Component } from '@angular/core';

import { KinoApiService } from './services/kino-api.service';
import { SubCardComponent } from './components/sub-card/sub-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewportScroller } from '@angular/common';
import { RatingImgComponent } from './components/rating-img/rating-img.component';
import { RondIconComponent } from './components/rond-component/rond-icon.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SubCardComponent, NavBarComponent, RatingImgComponent, RondIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private kinoApiService: KinoApiService, private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.kinoApiService.getSubDetails().then((data) => {
      console.log(data);
    });
  }

  scrollToBottom() { 
    this.scroller.scrollToAnchor('sub-card')
  }
}
