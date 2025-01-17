import { Component, Input } from '@angular/core';
import { Food } from '../Models/food';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input({required: true}) myfood: Food = {} as Food

}

