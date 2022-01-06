import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Address } from 'projects/mojeprzejazdy/src/app/model/address';

@Component({
  selector: 'app-transit-addresses',
  templateUrl: './transit-addresses.component.html',
  styleUrls: ['./transit-addresses.component.css'],
})
export class TransitAddressesComponent implements OnInit {
  private _data: Address[] = [];
  @Input() set data(val: Address[]) {
    this._data = val;
    this.dataSource = new MatTableDataSource(this.data);
  }
  get data(): Address[] {
    return this._data;
  }

  displayedColumns: string[] = ['street', 'streetNo', 'city', 'postalCode'];
  dataSource: MatTableDataSource<Address> = new MatTableDataSource<Address>();
  activeRow?: Address;

  constructor() {}

  ngOnInit(): void {}
}
