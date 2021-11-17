import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserregComponent } from './components/userreg/userreg.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { RouteComponent } from './components/route/route.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {LoginComponent} from "./components/login/login.component";
import {GroupviewComponent} from "./components/groupview/groupview.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupviewComponent,
    UserregComponent,
    OverviewComponent,
    ScheduleComponent,
    RouteComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
