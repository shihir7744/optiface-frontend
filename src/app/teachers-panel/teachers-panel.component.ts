import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './teachers-panel.component.html',
  styleUrl: './teachers-panel.component.scss'
})
export class TeachersPanelComponent {


  logout() {
    // Call your backend logout API here
    window.location.href = '/login'; // Redirect to login page after logging out
  }
}
