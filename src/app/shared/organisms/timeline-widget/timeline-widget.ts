import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularProgress } from '../../atoms/circular-progress/circular-progress';
import { Typography } from '../../atoms/typography/typography';

@Component({
  selector: 'app-timeline-widget',
  imports: [CommonModule, CircularProgress, Typography],
  templateUrl: './timeline-widget.html',
  styleUrl: './timeline-widget.css',
})
export class TimelineWidget {
  timelineData = [
    { progress: 40, color: 'var(--accent-yellow)' },
    { progress: 75, color: 'var(--accent-green)' },
    { progress: 20, color: 'var(--text-secondary)' },
    { progress: 80, color: 'var(--accent-pink)' },
    { progress: 60, color: 'var(--accent-purple)' },
  ];
}
