import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SerService } from '../../shared/services/ser.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  messages: any[] = [];
  editingMessageId: number | null = null;
  editedMessage: any = {};

  constructor(private router: Router, private service: SerService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadMessages();
      }
    });
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.service.getContactMessages().subscribe((res: any) => {
      this.messages = res;
      console.log('Messages loaded from API:', this.messages);
    });
  }

  deleteMessage(id: number): void {
    this.service.deleteContactMessage(id).subscribe(() => {
      this.loadMessages();
    });
  }

  startEdit(id: number): void {
    this.editingMessageId = id;
    const messageToEdit = this.messages.find(msg => msg.id === id);
    if (messageToEdit) {
      this.editedMessage = { ...messageToEdit };
    }
  }

  saveEdit(): void {
    this.service.updateContactMessage(this.editedMessage.id, this.editedMessage).subscribe(() => {
      this.editingMessageId = null;
      this.loadMessages();
    });
  }

  cancelEdit(): void {
    this.editingMessageId = null;
  }
}
