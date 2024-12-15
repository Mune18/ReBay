import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {
  chatOpen = false;
  chatUserName: string = '';
  chatUserRole: string = '';
  messages: string[] = [];
  newMessage: string = '';

  openChat(userName: string, userRole: string): void {
    this.chatOpen = true;
    this.chatUserName = userName;
    this.chatUserRole = userRole;
    this.messages = [];  // Clear previous chat history
  }

  closeChat(): void {
    this.chatOpen = false;
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}