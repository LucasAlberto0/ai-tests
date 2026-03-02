import { Component, Input } from '@angular/core';
import { Avatar } from '../../atoms/avatar/avatar';
import { Typography } from '../../atoms/typography/typography';

@Component({
  selector: 'app-user-menu',
  imports: [Avatar, Typography],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css',
})
export class UserMenu {
  @Input() avatarUrl: string = '';
}
