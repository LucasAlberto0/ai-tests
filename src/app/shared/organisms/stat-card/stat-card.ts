import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Typography } from '../../atoms/typography/typography';
import { CircularProgress } from '../../atoms/circular-progress/circular-progress';

@Component({
  selector: 'app-stat-card',
  imports: [CommonModule, Typography, CircularProgress],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
})
export class StatCard {
  @Input() title: string = 'DATA TEXT';
  @Input() value: string = '0';
  @Input() progress: number = 0;
  @Input() color: string = 'var(--accent-cyan)';
  @Input() subtitle: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy';
}
