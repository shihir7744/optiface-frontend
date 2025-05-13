import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import {StudentAttendanceComponent} from './student-attendance/student-attendance.component'; // Only needed if used in template

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridComponent,
    // StudentAttendanceComponent,
    // Only include if <app-grid> is used in the template
  ],

    // template:`<app-student-attendance></app-student-attendance>`,
  template: `
    <app-grid></app-grid>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'optiface-frontend';
}
