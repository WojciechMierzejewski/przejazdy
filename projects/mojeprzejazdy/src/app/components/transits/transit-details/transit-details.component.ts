import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
<<<<<<< HEAD
=======
import { MatTableDataSource } from '@angular/material/table';
>>>>>>> 606a1171c88b31f2f16e646f0991d7afb815828d
import { Subscription } from 'rxjs';
import { Address } from '../../../model/address';
import { Person } from '../../../model/person';
import { Transit } from '../../../model/transit';
<<<<<<< HEAD
import { AddressesComponent } from '../../addresses/addresses.component';
=======
import { AddressService } from '../../../service/address.service';
import { AddressComponent } from '../../address/address.component';
>>>>>>> 606a1171c88b31f2f16e646f0991d7afb815828d

export interface TransitDialogData {
  transit: Transit;
}
<<<<<<< HEAD

export interface AddressDialogData {
  address: Address;
}

=======
export interface AddressDialogData {
  address: Address;
}
>>>>>>> 606a1171c88b31f2f16e646f0991d7afb815828d
@Component({
  selector: 'app-transit-details',
  templateUrl: './transit-details.component.html',
  styleUrls: ['./transit-details.component.css'],
})
export class TransitDetailsComponent implements OnInit {
  displayedColumns: string[] = ['street'];
  data?: Transit;
<<<<<<< HEAD

  constructor(
=======
  dataSourceAddress: MatTableDataSource<Address> =
    new MatTableDataSource<Address>();
  activeRow?: Address;
  private dataSubscription: Subscription = Subscription.EMPTY;
  private dialogSubscription = Subscription.EMPTY;
  constructor(
    private dataService: AddressService,
>>>>>>> 606a1171c88b31f2f16e646f0991d7afb815828d
    @Inject(MAT_DIALOG_DATA) data: TransitDialogData,
    private dialog: MatDialog
  ) {
    this.data = data.transit;
  }
<<<<<<< HEAD
  private dialogSubscription = Subscription.EMPTY;
  ngOnInit(): void {}
=======

  ngOnInit(): void {
    this.dataSubscription.unsubscribe();
    this.dataSubscription = this.dataService
      .fetchDataFromServer()
      .subscribe((data) => {
        this.dataSourceAddress = new MatTableDataSource(data);
      });
  }
>>>>>>> 606a1171c88b31f2f16e646f0991d7afb815828d

  getPersons(): Person[] {
    return this.data?.group ?? [];
  }

  getAddresses(): Address[] {
    return this.data?.address ?? [];
  }
<<<<<<< HEAD
  addAddresses(event: Event) {
    const dialogConfig: MatDialogConfig<AddressesComponent> = {};
    const dialogRef = this.dialog.open(AddressesComponent, dialogConfig);
    this.dialogSubscription.unsubscribe();
=======
  addAddresses() {}

  onClick(row: Address): void {
    if (this.activeRow !== row) {
      this.activeRow = row;
      console.log(row);
    }
  }

  onDblClick(row: Address): void {
    const dialogConfig: MatDialogConfig<AddressDialogData> = {
      data: {
        address: row,
      },
    };
    const dialogRef = this.dialog.open(AddressComponent, dialogConfig);
>>>>>>> 606a1171c88b31f2f16e646f0991d7afb815828d
    this.dialogSubscription = dialogRef.afterClosed().subscribe((result) => {
      console.log(`Rezultat: ${result}`);
    });
  }
}
