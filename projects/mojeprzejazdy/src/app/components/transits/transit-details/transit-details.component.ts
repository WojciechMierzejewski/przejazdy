import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Address } from '../../../model/address';
import { Person } from '../../../model/person';
import { Transit } from '../../../model/transit';
import { AddressService } from '../../../service/address.service';
import { AddressComponent } from '../../address/address.component';

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
  dataSourceAddress: MatTableDataSource<Address> =
    new MatTableDataSource<Address>();
  activeRow?: Address;
  private dataSubscription: Subscription = Subscription.EMPTY;
  private dialogSubscription = Subscription.EMPTY;
  constructor(
    private dataService: AddressService,
    @Inject(MAT_DIALOG_DATA) data: TransitDialogData,
    private dialog: MatDialog
  ) {
    this.data = data.transit;
  }

  ngOnInit(): void {
    this.dataSubscription.unsubscribe();
    this.dataSubscription = this.dataService
      .fetchDataFromServer()
      .subscribe((data) => {
        this.dataSourceAddress = new MatTableDataSource(data);
      });
  }

  getPersons(): Person[] {
    return this.data?.group ?? [];
  }

  getAddresses(): Address[] {
    return this.data?.address ?? [];
  }
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
    this.dialogSubscription = dialogRef.afterClosed().subscribe((result) => {
      console.log(`Rezultat: ${result}`);
    });
  }
}
