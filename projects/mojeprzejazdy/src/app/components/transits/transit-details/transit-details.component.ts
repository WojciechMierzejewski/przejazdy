import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Address } from '../../../model/address';
import { Person } from '../../../model/person';
import { Transit } from '../../../model/transit';
import { AddressesComponent } from '../../addresses/addresses.component';

export interface TransitDialogData {
  transit: Transit;
}

export interface AddressDialogData {
  address: Address;
}

@Component({
  selector: 'app-transit-details',
  templateUrl: './transit-details.component.html',
  styleUrls: ['./transit-details.component.css'],
})
export class TransitDetailsComponent implements OnInit {
  displayedColumns: string[] = ['street'];
  data?: Transit;
  dataAddress?: Address;
  activeRow?: Address;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: TransitDialogData,
    private dialog: MatDialog
  ) {
    this.data = data.transit;
  }
  private dialogSubscription = Subscription.EMPTY;
  ngOnInit(): void {}

  getPersons(): Person[] {
    return this.data?.group ?? [];
  }

  getAddresses(): Address[] {
    return this.data?.address ?? [];
  }
  addAddresses(event: Event) {
    const dialogConfig: MatDialogConfig<TransitDialogData> = {};
    const dialogRef = this.dialog.open(AddressesComponent, dialogConfig);
  }
}
