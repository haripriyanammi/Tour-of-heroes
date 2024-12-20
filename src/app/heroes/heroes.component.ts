import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule, FormsModule]  // Add FormsModule here
})
export class HeroesComponent {
  hero = { id: 1, name: 'Windstorm' };
}
