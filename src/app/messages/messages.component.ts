import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';  // Import CommonModule
@Component({
  standalone: true,
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  //imports: [] // Add necessary imports if needed
  imports: [CommonModule],  // Add CommonModule here
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
