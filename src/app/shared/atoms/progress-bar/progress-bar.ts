import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
  @Input() progress: number = 0;
  @Input() color: string = 'var(--accent-cyan)';
  @Input() height: string = '8px';
}
