import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';  // Import MessagesComponent
import { HeroesComponent } from './heroes/heroes.component';      // Import HeroesComponent

@Component({
  standalone: true,     // Declare AppComponent as standalone
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent, MessagesComponent], // Add the components to imports array
})
export class AppComponent {
  title = 'Tour of Heroes';
}
