import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentServcie {
  _url = 'https://awps-dev.herokuapp.com/user/set';

  constructor(private _http: HttpClient) {}

  enroll(person: Person) {
    return this._http.post<any>(this._url, person);
  }
}
