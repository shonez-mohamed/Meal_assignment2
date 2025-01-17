import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SeafoodComponent } from '../seafood/seafood.component';
import { PastaComponent } from '../pasta/pasta.component';
import { BreakfastComponent } from '../breakfast/breakfast.component';

@Component({
  selector: 'app-meals',
  imports: [SeafoodComponent, PastaComponent , BreakfastComponent, RouterOutlet ,RouterLink, RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
