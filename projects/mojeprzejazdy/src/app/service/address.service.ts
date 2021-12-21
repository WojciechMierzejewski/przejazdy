import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Address } from '../model/address';

const data: Address[] = [
  { street: '5 th ave', streetNo: 5, city: 'Ny', postcode: 90299 },
  { street: '6 th ave', streetNo: 5, city: 'Ny', postcode: 90299 },
  { street: '7 th ave', streetNo: 5, city: 'Ny', postcode: 90299 },
  { street: '8 th ave', streetNo: 5, city: 'Ny', postcode: 90299 },
  { street: '9 th ave', streetNo: 5, city: 'Ny', postcode: 90299 },
];
@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<Address[]> {
    return of(data);
  }

  fetchDataFromServer(): Observable<any> {
    return this.httpClient.get('');
  }
}
