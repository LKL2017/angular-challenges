import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button.component';
import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'app-writer-dashboard',
  standalone: true,
  imports: [RouterLink, ButtonComponent, DashboardComponent],
  template: `
    <app-dashboard>
      <p>dashboard for Writer works!</p>
    </app-dashboard>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WriterDashboardComponent {}