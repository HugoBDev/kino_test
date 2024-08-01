import { Component } from '@angular/core';

import { KinoApiService } from './services/kino-api.service';
import { SubCardComponent } from './components/sub-card/sub-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SubCardComponent, NavBarComponent],
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
