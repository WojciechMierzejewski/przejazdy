import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, Subscription } from 'rxjs';
import { Transit } from '../model/transit';

const data: Transit[] = [];
@Injectable({
  providedIn: 'root',
})
export class TransitService {
  constructor(private httpClient: HttpClient) {}
  private dataSubscription: Subscription = Subscription.EMPTY;
  dataSource: MatTableDataSource<Transit> = new MatTableDataSource<Transit>();

  fetchData(): Observable<Transit[]> {
    console.log(data);
    return of(data);
  }

  fetchDataFromServer(): Observable<any> {
    return this.httpClient.get('/api/transit/all');
  }

  // private mapAddressToPoints(address: Address[]): points[] {
  //   return (address: Address[]) =>address.map {address => points };

  // }
}
