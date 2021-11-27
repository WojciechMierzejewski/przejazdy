import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./components/login/login.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { UserregComponent } from './components/userreg/userreg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregComponent,
    OverviewComponent,
    ScheduleComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
