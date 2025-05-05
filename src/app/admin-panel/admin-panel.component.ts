import {Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'] // fixed typo here
})

export class AdminPanelComponent {
  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const icon = document.querySelector('#themeToggle i');

    if (savedTheme === 'dark') {
      this.toggleDarkMode(true, icon, body);
    }

    document.getElementById('themeToggle')?.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      this.toggleDarkMode(isDark, icon, body);
    });
  }

  private toggleDarkMode(isDark: boolean, icon: Element | null, body: HTMLElement) {
    if (isDark) {
      icon?.classList.remove('fa-moon');
      icon?.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      icon?.classList.remove('fa-sun');
      icon?.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  }

  logout() {
    // Call your backend logout API here
    window.location.href = '/login'; // Redirect to login page after logging out
  }
}
