import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GroupviewComponent } from './components/groupview/groupview/groupview.component';
import { UseregComponent } from './components/userreg/usereg.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { RouteComponent } from './components/route/route.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupviewComponent,
    UseregComponent,
    OverviewComponent,
    ScheduleComponent,
    RouteComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
