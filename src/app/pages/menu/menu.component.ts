// menu.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerService } from '../../shared/services/ser.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: any[] = [];  // بيانات المنيو من الـ API

  constructor(private serService: SerService) { }

  ngOnInit(): void {
    this.serService.getMenu().subscribe(
      data => {
        console.log('Menu Data:', data);
        this.menu = data;
      },
      error => {
        console.error('Error fetching menu data:', error);
      }
    );
  }
}
