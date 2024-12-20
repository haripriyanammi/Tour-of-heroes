import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [FormsModule], // Make sure FormsModule is added here
})
export class HeroesComponent {
  hero = { name: 'Windstorm' };  // Define your hero object here
}
