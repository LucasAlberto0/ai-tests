import { Component } from '@angular/core';
import { Icon } from '../../atoms/icon/icon';

@Component({
  selector: 'app-search-bar',
  imports: [Icon],
  template: `
    <div class="search-bar">
      <app-icon name="search" size="18px" color="var(--text-muted)"></app-icon>
      <input type="text" placeholder="SEARCH" class="search-input" />
    </div>
  `,
  styleUrl: './search-bar.css',
})
export class SearchBar { }
