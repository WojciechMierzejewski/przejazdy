import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Person } from '../../model/person';
import { PersonService } from '../../service/person.service ';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname'];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>();
  activeRow?: Person;

  private dataSubscription: Subscription = Subscription.EMPTY;

  constructor(private dataService: PersonService) { }

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

  onClick(row: Person): void {
    if (this.activeRow !== row) {
      this.activeRow = row;
      console.log(row);
    }
  }

  onDblClick(row: Person): void {
    console.log('double click:', row);
  }
}
