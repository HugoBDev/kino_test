import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rond-component',
  standalone: true,
  imports: [NgClass],
  templateUrl: './rond-icon.component.html',
  styleUrls: ['./rond-icon.component.scss'],
})
export class RondIconComponent {
@Input()half: boolean = false
@Input()step: number = 1
@Input()imgSrc: string = ""
}
