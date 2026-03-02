import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  imports: [],
  templateUrl: './typography.html',
  styleUrl: './typography.css',
})
export class Typography {
  @Input() variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption' = 'body';
  @Input() color: string = 'var(--text-primary)';
  @Input() align: 'left' | 'center' | 'right' = 'left';
}
