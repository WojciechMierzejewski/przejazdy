import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'projects/mojeprzejazdy/src/app/model/person';

@Component({
  selector: 'app-transit-persons',
  templateUrl: './transit-persons.component.html',
  styleUrls: ['./transit-persons.component.css'],
})
export class TransitPersonsComponent implements OnInit {
  private _data: Person[] = [];
  @Input() set data(val: Person[]) {
    this._data = val;
    this.dataSource = new MatTableDataSource(this.data);
  }
  get data(): Person[] {
    return this._data;
  }

  displayedColumns: string[] = ['id'];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>();
  activeRow?: Person;

  constructor() {}

  ngOnInit(): void {}
}
