import { Component } from '@angular/core';

@Component({
  selector: 'app-formula-options',
  standalone: true,
  imports: [],
  templateUrl: './formula-options.component.html',
  styleUrl: './formula-options.component.scss'
})
export class FormulaOptionsComponent {
  features : string[] = [
    
      
      'Partagez vos activités sur des plateformes tierces de Fitness'
    ,
    
      
      'Profitez de l\'expérience complète en débloquant l\'accès à toutes les vidéos de Kinomap'
    ,
    
      
      'Prenez part à nos challenges et soyez récompensés !'
    ,
    
      
      'Pratiquez de l\'entraînement par intervalle'
    ,
    
      
      'Rejoignez des sessions multijoueurs avec des participants du monde entier'
    
  ];
}
