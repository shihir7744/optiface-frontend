import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NgOptimizedImage } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {TeachersPanelComponent} from './teachers-panel/teachers-panel.component';
import {GridComponent} from './grid/grid.component'; // <-- Import this here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminPanelComponent,
    NgOptimizedImage,
    HomeComponent,
    LoginComponent,
    TeachersPanelComponent,
    GridComponent
  ],
  // template: '<router-outlet></router-outlet>',
  template: '<app-grid></app-grid>' +
    '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'optiface-frontend';
}
