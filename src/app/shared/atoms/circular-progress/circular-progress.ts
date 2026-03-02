import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-progress',
  imports: [CommonModule],
  templateUrl: './circular-progress.html',
  styleUrl: './circular-progress.css',
})
export class CircularProgress {
  @Input() progress: number = 0;
  @Input() color: string = 'var(--accent-cyan)';
  @Input() size: string = '100px';
  @Input() showText: boolean = false;
}
