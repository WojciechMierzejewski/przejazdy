import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class TransitDetailsService {
  personDetails: Array<string> = [];
  addressDetails: Array<string> = [];
  constructor(private httpClient: HttpClient, person: Person) {}

  fetchDetailsUser(id: number): Observable<any> {
    return this.httpClient
      .get(`api/transit/get?personId=${id}`)
      .pipe(map((data) => this.personDetails.push()));
  }

  fetchDetailsAddress(id: number): Observable<any> {
    return this.httpClient
      .get(`api/address/get?addressId=${id}`)
      .pipe(map((data) => this.addressDetails.push()));
  }
}
