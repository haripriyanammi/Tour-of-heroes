import { Component } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';  // Import the routing module
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';  // Messages component
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Marking as standalone
  imports: [
    RouterOutlet,  // Import the routing module here to use router
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
