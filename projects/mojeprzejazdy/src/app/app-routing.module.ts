import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        canActivate: [AuthGuard],
        component: OverviewComponent,
        children: [
          {
            path: '',
            redirectTo: 'schedule',
            pathMatch: 'full',
          },
          {
            path: 'schedule',
            component: ScheduleComponent,
          },
        ],
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
