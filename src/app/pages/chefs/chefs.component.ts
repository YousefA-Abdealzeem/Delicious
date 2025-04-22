import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerService } from '../../shared/services/ser.service';


@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [CommonModule],  // تأكد من إضافته
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  chefs: any[] = [];  // المتغير الذي سيحتفظ بالبيانات

  constructor(private serService: SerService) { }

  ngOnInit(): void {
    // استخدام خدمة SerService لجلب البيانات
    this.serService.getChefs().subscribe(
      data => {
        console.log('Data from API:', data);  // طباعة الداتا في الـ console
        this.chefs = data;  // حفظ الداتا في المتغير chefs
      },
      error => {
        console.error('Error:', error);  // طباعة أي خطأ في الـ console
      }
    );
  }
}
