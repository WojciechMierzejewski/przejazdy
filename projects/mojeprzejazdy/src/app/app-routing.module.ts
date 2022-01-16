import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { LoginComponent } from './components/login/login.component';
import { PersonsComponent } from './components/persons/persons.component';
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
        redirectTo: 'transits',
        pathMatch: 'full',
      },
      {
        path: 'persons',
        canActivate: [AuthGuard],
        component: PersonsComponent,
      },
      {
        path: 'register',
        component: UserregComponent,
        pathMatch: 'full',
      },
      { path: 'addresses', component: AddressesComponent, pathMatch: 'full' },

      {
        path: 'addaddresses',
        component: AddAddressComponent,
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
            path: 'transit-reserve',
            component: TransitReserveComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
