import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  _url = '/api/user/set';

  constructor(private _http: HttpClient) { }

  enroll(person: Person) {
    return this._http.post<any>(this._url, person);
  }
}
