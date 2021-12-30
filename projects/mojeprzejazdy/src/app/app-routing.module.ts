import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        canActivate: [AuthGuard],
        component: OverviewComponent
      },
      {
        path: 'register',
        component: UserregComponent,
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'schedule',
        canActivate: [AuthGuard],
        component: ScheduleComponent,
        pathMatch: 'full',
      },
      {
        path: 'transits',
        canActivate: [AuthGuard],
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
          }
        ],
      },
    ],
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
