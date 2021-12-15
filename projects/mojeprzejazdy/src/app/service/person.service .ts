import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../model/person';

const data: Person[] = [];
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<Person[]> {
    return of(data);
  }

  fetchDataFromServer(): Observable<any> {
    return this.httpClient.get('/api/user/getlist');
  }

  putDataToServer(): Observable<any> {
    return this.httpClient.get('/api/user/set');
  }
}
