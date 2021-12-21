import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transit } from '../model/transit';

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
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<Transit[]> {
    return of(data);
  }

  fetchDataFromServer(): Observable<any> {
    return this.httpClient.get('/api/destination/all');
  }
}
