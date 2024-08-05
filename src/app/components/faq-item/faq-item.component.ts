import { Component } from '@angular/core';
import { KinoApiService } from '../../services/kino-api.service';
import { Faq } from '../../models/kino.model';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss',
})
export class FaqItemComponent {
  faqItems: (Faq & { isOpen: boolean })[] = [];

  constructor(private kinoApiService: KinoApiService) {}

  ngOnInit(): void {
    this.kinoApiService.getFAQ().then((data: Faq[]) => {
      this.faqItems = data.map((faq : Faq) => ({ ...faq, isOpen: false }));
      console.log(this.faqItems);
      
    });
    
    
  }
}
