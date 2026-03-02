import { Component } from '@angular/core';
import { Sidebar } from '../../organisms/sidebar/sidebar';
import { Header } from '../../organisms/header/header';

@Component({
  selector: 'app-dashboard-layout',
  imports: [Sidebar, Header],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout { }
