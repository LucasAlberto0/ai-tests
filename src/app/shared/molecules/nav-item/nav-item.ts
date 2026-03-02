import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '../../atoms/icon/icon';
import { Typography } from '../../atoms/typography/typography';

@Component({
  selector: 'app-nav-item',
  imports: [CommonModule, Icon, Typography],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.css',
})
export class NavItem {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() active: boolean = false;
  @Input() hasDropdown: boolean = false;
}
