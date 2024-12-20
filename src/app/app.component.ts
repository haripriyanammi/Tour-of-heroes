import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';  // Import the HeroesComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark AppComponent as standalone
  imports: [HeroesComponent]  // Import HeroesComponent here
})
export class AppComponent {
  title = 'Tour of Heroes';
}
