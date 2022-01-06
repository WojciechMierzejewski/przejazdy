import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../../../model/person';

@Component({
  selector: 'app-transit-reserve',
  templateUrl: './transit-reserve.component.html',
  styleUrls: ['./transit-reserve.component.css'],
})
export class TransitReserveComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>();
  activeRow?: Person;
  private _data: Person[] = [];
  @Input() set data(val: Person[]) {
    this._data = val;
    this.dataSource = new MatTableDataSource(this.data);
  }

  get data(): Person[] {
    return this._data;
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MatTableDataSource, {
      width: '500px',
      data: { name: this.dataSource },
    });
  }
}
