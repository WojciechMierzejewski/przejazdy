import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  { id: 10, points: [], valid: true, schedules: [] },
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

  ngOnInit(): void {
    this.dataSubscription = this.addressService
      .fetchData()
      .subscribe((address) => console.log(address));

    this.dataSubscription.unsubscribe();
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
