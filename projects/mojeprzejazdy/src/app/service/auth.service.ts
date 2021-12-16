import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  _loginUrl = '/api/user/user/login';
  authenticate(login: {
    login: string;
    password: string;
  }): Observable<boolean> {
    if (this.http.post<any>(this._loginUrl, login)) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
