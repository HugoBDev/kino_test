import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent {
  constructor(private scroller: ViewportScroller) {}
  scrollToBottom() {
    this.scroller.scrollToAnchor('sub-card');
  }
}
