import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KinoApiService } from './services/kino-api.service';
import { SubCardComponent } from './components/price/sub-card/sub-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private kinoApiService: KinoApiService){}

  ngOnInit(): void {
    this.kinoApiService.getSubDetails().then((data ) => {
      console.log(data); 
    })
    
  }
}
