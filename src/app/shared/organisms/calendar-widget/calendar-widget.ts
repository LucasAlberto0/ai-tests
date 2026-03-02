import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Typography } from '../../atoms/typography/typography';
import { Icon } from '../../atoms/icon/icon';

@Component({
  selector: 'app-calendar-widget',
  imports: [CommonModule, Typography, Icon],
  templateUrl: './calendar-widget.html',
  styleUrl: './calendar-widget.css',
})
export class CalendarWidget { }
