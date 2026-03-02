import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '../../atoms/icon/icon';
import { Typography } from '../../atoms/typography/typography';
import { NavItem } from '../../molecules/nav-item/nav-item';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, Icon, Typography, NavItem],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar { }
