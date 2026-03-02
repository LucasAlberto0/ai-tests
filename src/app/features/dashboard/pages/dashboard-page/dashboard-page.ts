import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayout } from '../../../../shared/templates/dashboard-layout/dashboard-layout';
import { Typography } from '../../../../shared/atoms/typography/typography';
import { StatCard } from '../../../../shared/organisms/stat-card/stat-card';
import { AreaChartCard } from '../../../../shared/organisms/area-chart-card/area-chart-card';
import { BarChartCard } from '../../../../shared/organisms/bar-chart-card/bar-chart-card';
import { CalendarWidget } from '../../../../shared/organisms/calendar-widget/calendar-widget';
import { ActivitiesWidget } from '../../../../shared/organisms/activities-widget/activities-widget';
import { TimelineWidget } from '../../../../shared/organisms/timeline-widget/timeline-widget';
import { ProgressBar } from '../../../../shared/atoms/progress-bar/progress-bar';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    CommonModule,
    DashboardLayout,
    Typography,
    StatCard,
    AreaChartCard,
    BarChartCard,
    CalendarWidget,
    ActivitiesWidget,
    TimelineWidget,
    ProgressBar
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage { }
