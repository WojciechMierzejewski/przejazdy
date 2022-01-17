import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Address } from '../../../model/address';
import { Person } from '../../../model/person';
import { Transit } from '../../../model/transit';
import { TransitService } from '../../../service/transit.service';
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
export class TransitDetailsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['street'];
  data?: Transit;
  dataAddress?: Address;
  activeRow?: Address;
  private dialogSubscription = Subscription.EMPTY;
  private dataSubscription = Subscription.EMPTY;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: TransitDialogData,
    private dialog: MatDialog,
    private transitService: TransitService
  ) {
    this.dataSubscription = this.transitService
      .fetchTransitDetails(data.transit.id)
      .subscribe((data) => (this.data = data));
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.dialogSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  getPersons(): Person[] {
    return this.data?.transitUsers ?? [];
  }

  getAddresses(): { address: Address }[] {
    return this.data?.transitAddresses ?? [];
  }

  addAddresses(event: Event) {
    const dialogConfig: MatDialogConfig<TransitDialogData> = {};
    const dialogRef = this.dialog.open(AddressesComponent, dialogConfig);
    this.dialogSubscription = dialogRef
      .afterClosed()
      .pipe(
        switchMap((response) => {
          if (response) {
            const address = response as Address;
            return this.transitService.addAddressToTransit(
              this.data?.id ?? 0,
              response.id
            );
          } else {
            return of(false);
          }
        })
      )
      .subscribe((response) => {
        if (response) {
          console.log('address was added');
        } else {
          console.log('operation failed');
        }
      });
  }
}
