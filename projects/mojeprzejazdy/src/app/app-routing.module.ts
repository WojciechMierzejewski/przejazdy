import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TransitReserveComponent } from './components/transits/transit-reserve/transit-reserve.component';
import { TransitsComponent } from './components/transits/transits.component';
import { UserregComponent } from './components/userreg/userreg.component';
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
        path: 'register',
        component: UserregComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
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
          {
            path: 'transits',
            component: TransitsComponent,
            children: [
              {
                path: '',
                redirectTo: 'transit-reserve',
                pathMatch: 'full',
              },
              {
                path: 'transit-reserve',
                component: TransitReserveComponent,
              },
              {
                path: 'transits',
                component: TransitsComponent,
              },
            ],
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
export class AppRoutingModule {}
