import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  rows = Array.from({ length: 100 }, (_, i) => i);
  cols = Array.from({ length: 100 }, (_, j) => j);
}
