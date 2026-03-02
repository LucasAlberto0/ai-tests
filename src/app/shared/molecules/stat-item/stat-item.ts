import { Component, Input } from '@angular/core';
import { Typography } from '../../atoms/typography/typography';
import { ProgressBar } from '../../atoms/progress-bar/progress-bar';

@Component({
  selector: 'app-stat-item',
  imports: [Typography, ProgressBar],
  templateUrl: './stat-item.html',
  styleUrl: './stat-item.css',
})
export class StatItem {
  @Input() label: string = '';
  @Input() progress: number = 0;
  @Input() color: string = 'var(--accent-cyan)';
}
