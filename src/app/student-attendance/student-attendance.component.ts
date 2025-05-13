// File: student-attendance.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

interface AttendanceSession {
  date: string;
  status: string;
}

interface AttendanceSummary {
  subject: string;
  attended: number;
  total: number;
  fine: number;
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
    MatSelectModule,
    MatFormFieldModule,
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

  ngOnInit(): void {
    setTimeout(() => {
      this.summary = [
        {
          subject: "Mathematics",
          attended: 24,
          total: 30,
          fine: 120,
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
          attended: 26,
          total: 30,
          fine: 80,
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
          attended: 28,
          total: 30,
          fine: 40,
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
      this.loading = false;
    }, 1000);
  }

  handleExport(): void {
    console.log("Exporting report...");
    // Export logic here
  }

  filteredSummary(): AttendanceSummary[] {
    return this.summary.filter(s => {
      return (this.selectedSemester === "all" || s.semester === this.selectedSemester) &&
        (this.selectedSubject === "all" || s.subject === this.selectedSubject);
    });
  }

  get semesterOptions(): string[] {
    return Array.from(new Set(this.summary.map(s => s.semester)));
  }

  get subjectOptions(): string[] {
    return Array.from(new Set(this.summary.map(s => s.subject)));
  }
}

