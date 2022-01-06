import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Transit } from '../../model/transit';
import { TransitService } from '../../service/transit.service';
import { TransitDetailsComponent, TransitDialogData } from './transit-details/transit-details.component';
import { TransitReserveComponent, TransitReserveData } from './transit-reserve/transit-reserve.component';

@Component({
  selector: 'app-routes',
  templateUrl: './transits.component.html',
  styleUrls: ['./transits.component.css'],
})
export class TransitsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'points', 'valid', 'schedule'];
  addressArray: any = [];
  dataSourceTransits: MatTableDataSource<Transit> =
    new MatTableDataSource<Transit>();

  activeRow?: Transit;

  private dataSubscription: Subscription = Subscription.EMPTY;
  private dialogSubscription = Subscription.EMPTY;

  constructor(
    private dataService: TransitService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSubscription.unsubscribe();
    this.dataSubscription = this.dataService
      .fetchDataFromServer()
      .subscribe((data) => {
        this.dataSourceTransits = new MatTableDataSource(data);
      });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.dialogSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSourceTransits) {
      this.dataSourceTransits.filter = filterValue.trim().toLowerCase();
    }
  }

  onClick(row: Transit): void {
    if (this.activeRow !== row) {
      this.activeRow = row;
      console.log(row);
    }
  }

  onDblClick(row: Transit): void {
    const dialogConfig: MatDialogConfig<TransitDialogData> = {
      data: {
        transit: row
      },
    };
    const dialogRef = this.dialog.open(TransitDetailsComponent, dialogConfig);
    this.dialogSubscription = dialogRef.afterClosed().subscribe((result) => {
      console.log(`Rezultat: ${result}`);
    });
  }

  onReserveClick(event: Event): void {
    const dialogConfig: MatDialogConfig<TransitReserveData> = {
      data: {
        transit: this.activeRow
      },
    };
    const dialogRef = this.dialog.open(TransitReserveComponent, dialogConfig);
    this.dialogSubscription.unsubscribe();
    this.dialogSubscription = dialogRef.afterClosed().subscribe((result) => {
      console.log(`Rezultat: ${result}`);
    });
  }

  getAddressItem(position: number): string {
    let item = this.addressArray[position];
    return `${item}`;
  }

  get isRowActive(): boolean {
    return this.activeRow ? true : false;
  }

}
