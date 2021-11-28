import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Route } from '../../model/route';
import { RoutesService } from '../../service/routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'points', 'valid', 'schedules'];
  dataSource: MatTableDataSource<Route> = new MatTableDataSource<Route>();
  private dataSubscription: Subscription = Subscription.EMPTY;

  constructor(private dataService: RoutesService) { }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.fetchData()
      .subscribe(data => this.dataSource = new MatTableDataSource(data));
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

}
