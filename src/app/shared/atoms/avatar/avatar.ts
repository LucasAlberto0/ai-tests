import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  @Input() src: string = '';
  @Input() alt: string = 'User Avatar';
  @Input() size: string = '40px';
  @Input() initials: string = 'U';
}
