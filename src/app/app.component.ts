import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';  // Import the routing module
//import { HeroesComponent } from './heroes/heroes.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';  // Messages component

@Component({
  selector: 'app-root',
  standalone: true,  // Marking as standalone
  imports: [
    AppRoutingModule,  // Import the routing module here to use router
    //HeroesComponent,
    //DashboardComponent,
    //HeroDetailComponent,
    MessagesComponent
  ],
  template: `
    <div>
      <h1>Tour of Heroes</h1>
      <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
      </nav>
      <router-outlet></router-outlet>  <!-- Where routed components will be displayed -->
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
