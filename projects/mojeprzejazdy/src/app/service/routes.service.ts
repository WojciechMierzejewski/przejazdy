import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Route } from '../model/route';

const data: Route[] = [
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
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  fetchData(): Observable<Route[]> {
    return of(data);
  }
}
