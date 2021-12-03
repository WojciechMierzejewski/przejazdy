import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Transit } from '../../model/transit';
import { TransitService } from '../../service/transit.service';

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

  constructor(private dataService: TransitService) { }

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
}
