import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { InputTextComponent } from './components/common/inputs/input-text/input-text.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PersonsComponent } from './components/persons/persons.component';
import { ScheduleDialogComponent } from './components/schedule/schedule-dialog/schedule-dialog.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TransitAddressesComponent } from './components/transits/transit-details/transit-addresses/transit-addresses.component';
import { TransitDetailsComponent } from './components/transits/transit-details/transit-details.component';
import { TransitPersonsComponent } from './components/transits/transit-details/transit-persons/transit-persons.component';
import { TransitReserveComponent } from './components/transits/transit-reserve/transit-reserve.component';
import { TransitsComponent } from './components/transits/transits.component';
import { UserregComponent } from './components/userreg/userreg.component';
import { AddAddressComponent } from './components/add-address/add-address.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregComponent,
    PersonsComponent,
    ScheduleComponent,
    NotfoundComponent,
    ScheduleDialogComponent,
    TransitsComponent,
    TransitReserveComponent,
    InputTextComponent,
    AddressComponent,
    AddressesComponent,
    TransitDetailsComponent,
    TransitAddressesComponent,
    TransitPersonsComponent,
    AddAddressComponent,
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
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
