import { Component } from '@angular/core';

import { KinoApiService } from './services/kino-api.service';
import { SubCardComponent } from './components/sub-card/sub-card.component';
import { ViewportScroller } from '@angular/common';
import { RatingImgComponent } from './components/rating-img/rating-img.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';
import { GiftCardComponent } from './components/gift-card/gift-card.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    SubCardComponent,
    RatingImgComponent,
    FaqItemComponent,
    GiftCardComponent,
    WelcomePageComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private kinoApiService: KinoApiService,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.kinoApiService.getSubDetails().then((data) => {});
  }
}
