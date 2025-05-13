import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {TeachersPanelComponent} from './teachers-panel/teachers-panel.component';
import {StudentAttendanceComponent} from './student-attendance/student-attendance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'teacher', component: TeachersPanelComponent },
  { path: 'student-attendance', component: StudentAttendanceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

