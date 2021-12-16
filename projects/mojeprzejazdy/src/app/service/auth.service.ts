import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }
  _loginUrl = '/api/user/login';
  authenticate(login: {
    login: string;
    password: string;
  }): Observable<boolean> {
    return this.http.post<any>(this._loginUrl, login)
      .pipe(catchError(e => of(false)),
        map(value => {
          console.log(value);
          return value === false ? false : true;
        }),
      );

  }
}
