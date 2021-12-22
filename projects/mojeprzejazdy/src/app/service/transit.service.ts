import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, Subscription } from 'rxjs';
import { Transit } from '../model/transit';
import { AddressService } from './address.service';

const data: Transit[] = [
  { id: 1, points: [], valid: true, schedules: [] },
  { id: 2, points: [], valid: true, schedules: [] },
  { id: 3, points: [], valid: true, schedules: [] },
  { id: 4, points: [], valid: true, schedules: [] },
  { id: 5, points: [], valid: true, schedules: [] },
  { id: 6, points: [], valid: true, schedules: [] },
  { id: 7, points: [], valid: true, schedules: [] },
  { id: 8, points: [], valid: true, schedules: [] },
  { id: 9, points: [], valid: true, schedules: [] },
];
@Injectable({
  providedIn: 'root',
})
export class TransitService {
  constructor(
    private httpClient: HttpClient,
    private addressService: AddressService
  ) {}
  private dataSubscription: Subscription = Subscription.EMPTY;
  dataSource: MatTableDataSource<Transit> = new MatTableDataSource<Transit>();

  ngOnInit(): void {
    this.dataSubscription.unsubscribe();
    this.dataSubscription = this.addressService
      .fetchDataFromServer()
      .subscribe((data) => {
        console.log('Data from server11111', data);
        // this.dataSource = new MatTableDataSource(data);
      });
  }

  fetchData(): Observable<Transit[]> {
    console.log(data);
    return of(data);
  }

  fetchDataFromServer(): Observable<any> {
    return this.httpClient.get('');
  }

  // private mapAddressToPoints(address: Address[]): points[] {
  //   return (address: Address[]) =>address.map {address => points };

  // }
}
