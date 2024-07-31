import { Component, Input } from '@angular/core';

import { KinoApiService } from '../../../services/kino-api.service';
import { DatePipe } from '@angular/common';
import { SubDetail } from '../../../models/kino.model';

@Component({
  selector: 'app-sub-card',
  standalone: true,
  imports: [],
  templateUrl: './sub-card.component.html',
  styleUrl: './sub-card.component.scss',
})
export class SubCardComponent {
  subDetails: SubDetail[] = [];

  constructor(private kinoApiService: KinoApiService) {}
  ngOnInit(): void {
    this.kinoApiService.getSubDetails().then((data : SubDetail[]) => {
      data.forEach((subDetail : any) => {
        subDetail.period = this.convertPeriodToString(subDetail.period);
      })
      this.subDetails = data;
    }); 
  }

  convertPeriodToString(period : number) : string{
    switch(period){
      case 1 : return "MOIS";
      case 12 : return "AN";
      default : return "A VIE";
    }
  }
}
