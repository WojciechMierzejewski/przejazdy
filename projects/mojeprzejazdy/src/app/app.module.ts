import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./components/login/login.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleDialogComponent } from './components/schedule/schedule-dialog/schedule-dialog.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TransitsComponent } from './components/transits/transits.component';
import { UserregComponent } from './components/userreg/userreg.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregComponent,
    OverviewComponent,
    ScheduleComponent,
    NotfoundComponent,
    ScheduleDialogComponent,
    TransitsComponent,
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
    MatDialogModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
