import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

interface AttendanceSession {
  date: string;
  status: string;
}

interface AttendanceSummary {
  subject: string;
  attended: number;
  total: number;
  fine: number;
  percentage?: number;
  studentName: string;
  studentId: string;
  semester: string;
  department: string;
  teacherName: string;
  sessions: AttendanceSession[];
}

@Component({
  selector: 'app-student-attendance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {
  summary: AttendanceSummary[] = [];
  loading: boolean = true;
  selectedSemester: string = 'all';
  selectedSubject: string = 'all';
  studentIdControl = new FormControl('');
  filteredStudentIds$: Observable<string[]> = new Observable();

  ngOnInit(): void {
    setTimeout(() => {
      this.summary = [
        {
          subject: "Mathematics",
          attended: 0, total: 0, fine: 0,
          studentName: "Rohit Sharma",
          studentId: "STU202501",
          semester: "6",
          department: "Computer Science",
          teacherName: "Dr. Neha Verma",
          sessions: [
            { date: "2024-09-01", status: "Present" },
            { date: "2024-09-03", status: "Absent" },
            { date: "2024-09-05", status: "Present" },
          ],
        },
        {
          subject: "Physics",
          attended: 0, total: 0, fine: 0,
          studentName: "Rohit Sharma",
          studentId: "STU202501",
          semester: "6",
          department: "Computer Science",
          teacherName: "Dr. S. Krishnan",
          sessions: [
            { date: "2024-09-02", status: "Present" },
            { date: "2024-09-04", status: "Present" },
            { date: "2024-09-06", status: "Absent" },
          ],
        },
        {
          subject: "Chemistry",
          attended: 0, total: 0, fine: 0,
          studentName: "Rohit Sharma",
          studentId: "STU202501",
          semester: "5",
          department: "Computer Science",
          teacherName: "Dr. Asha Iyer",
          sessions: [
            { date: "2024-08-01", status: "Present" },
            { date: "2024-08-03", status: "Present" },
            { date: "2024-08-05", status: "Present" },
          ],
        },
      ];
      this.filteredStudentIds$ = this.studentIdControl.valueChanges.pipe(
        startWith(''),
        map(value => this.studentIds.filter(id => id.toLowerCase().includes(value?.toLowerCase() || '')))
      );
      this.loading = false;
    }, 1000);
  }

  handleExport(): void {
    console.log("Exporting report...");
  }

  filteredSummary(): AttendanceSummary[] {
    return this.summary.map(s => {
      const total = 30;
      const attended = s.sessions.filter(sess => sess.status === 'Present').length;
      const fine = (total - attended) * 20;
      const percentage = (attended / total) * 100;

      return {
        ...s,
        total,
        attended,
        fine,
        percentage: +percentage.toFixed(2)
      };
    }).filter(s =>
      (this.selectedSemester === 'all' || s.semester === this.selectedSemester) &&
      (this.selectedSubject === 'all' || s.subject === this.selectedSubject) &&
      (!this.studentIdControl.value || s.studentId.includes(this.studentIdControl.value))
    );
  }

  get semesterOptions(): string[] {
    return Array.from(new Set(this.summary.map(s => s.semester)));
  }

  get subjectOptions(): string[] {
    return Array.from(new Set(this.summary.map(s => s.subject)));
  }

  get studentIds(): string[] {
    return Array.from(new Set(this.summary.map(s => s.studentId)));
  }
}
