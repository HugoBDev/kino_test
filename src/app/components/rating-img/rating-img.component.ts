import { Component } from '@angular/core';
import { KinoApiService } from '../../services/kino-api.service';
import { RondIconComponent } from '../rond-component/rond-icon.component';
@Component({
  selector: 'app-rating-img',
  standalone: true,
  imports: [RondIconComponent],
  templateUrl: './rating-img.component.html',
  styleUrl: './rating-img.component.scss',
})
export class RatingImgComponent {
  ratingScore: number = 0;
  freePeriod: number = 0;
  constructor(private KinoApiService: KinoApiService) {}

  ngOnInit(): void {
    this.KinoApiService.getScore().then((data) => {
      this.ratingScore = data;
    });
    this.KinoApiService.getFreePeriod().then((data) => {
      this.freePeriod = data;
    });
  }
}
