import { Component } from '@angular/core';
import { SearchBar } from '../../molecules/search-bar/search-bar';
import { UserMenu } from '../../molecules/user-menu/user-menu';
import { Icon } from '../../atoms/icon/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, SearchBar, UserMenu, Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { }
