import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Address } from '../../model/address';
import { AddressService } from '../../service/address.service';
import { TransitDialogData } from '../transits/transit-details/transit-details.component';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
})
export class AddressesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'street', 'streetNo', 'city', 'postcode'];
  dataSource: MatTableDataSource<Address> = new MatTableDataSource<Address>();
  activeRow?: Address;

  private dataSubscription: Subscription = Subscription.EMPTY;

  constructor(private dataService: AddressService, private dialog: MatDialog) {}
  dialogConfig: MatDialogConfig<TransitDialogData> = {
    // data: {
    //   address: row,
    // },
  };

  ngOnInit(): void {
    this.dataSubscription.unsubscribe();
    this.dataSubscription = this.dataService
      .fetchDataFromServer()
      .subscribe((data) => {
        console.log('Data from server', data);
        this.dataSource = new MatTableDataSource(data);
      });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  onClick(row: Address): void {
    if (this.activeRow !== row) {
      this.activeRow = row;
      console.log(row);
    }
  }

  onDblClick(row: Address): void {
    console.log('double click:', row);
  }

  onSelectClick(event: Event): void {
    const dialogConfig: MatDialogConfig<TransitDialogData> = {
      // data: {
      //     address: this.activeRow,
      // },
    };
  }

  get isRowActive(): boolean {
    return this.activeRow ? true : false;
  }
}
