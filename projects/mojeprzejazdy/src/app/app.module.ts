import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
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
import { ScheduleDialogComponent } from './components/schedule/schedule-dialog/schedule-dialog.component';
import { RoutesComponent } from './components/routes/routes.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregComponent,
    OverviewComponent,
    ScheduleComponent,
    NotfoundComponent,
    ScheduleDialogComponent,
    RoutesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
