import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Transit } from '../../model/transit';
import { TransitService } from '../../service/transit.service';
import { TransitReserveComponent } from './transit-reserve/transit-reserve.component';

@Component({
  selector: 'app-routes',
  templateUrl: './transits.component.html',
  styleUrls: ['./transits.component.css'],
})
export class TransitsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'points', 'valid', 'schedules'];
  dataSource: MatTableDataSource<Transit> = new MatTableDataSource<Transit>();
  activeRow?: Transit;

  private dataSubscription: Subscription = Subscription.EMPTY;
  private dialogSubscription = Subscription.EMPTY;

  constructor(private dataService: TransitService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSubscription = this.dataService
      .fetchData()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
    this.dataSubscription.unsubscribe();
    this.dataSubscription = this.dataService
      .fetchDataFromServer()
      .subscribe((data) => console.log('Data from server', data));
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.dialogSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  onClick(row: Transit): void {
    if (this.activeRow !== row) {
      this.activeRow = row;
      console.log(row);
    }
  }

  onDblClick(row: Transit): void {
    console.log('double click:', row);
  }

  onDetailsClick(row: Transit): void {
    console.log('details clicked:', row);
  }

  onReserveClick(row: Transit): void {
    const dialogRef = this.dialog.open(TransitReserveComponent);

    this.dialogSubscription = dialogRef.afterClosed().subscribe((result) => {
      console.log(`Rezultat: ${result}`);
    });
  }
}
