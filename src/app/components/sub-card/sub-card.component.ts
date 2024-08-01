import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { SubDetail } from '../../models/kino.model';
import { KinoApiService } from '../../services/kino-api.service';

@Component({
  selector: 'app-sub-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sub-card.component.html',
  styleUrl: './sub-card.component.scss',
})


export class SubCardComponent {
   subOptions : string[]  = [
    'Partagez vos activités sur des plateformes tierces de Fitness',
    'Profitez de l\'expérience complète en débloquant l\'accès à toutes les vidéos de Kinomap',
    'Prenez part à nos challenges et soyez récompensés !',
    'Pratiquez de l\'entrainement par intervalle',
    'Rejoignez des sessions multijoueurs avec des participants du monde entier'
  ]
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
