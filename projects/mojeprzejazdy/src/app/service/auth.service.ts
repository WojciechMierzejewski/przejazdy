import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * TODO:
 * As soon as authentication mechanism is ready on backend side,
 * you can get rid of authenticated property and replace it with cookie value.
 * Then each http request should have the cookie value attached.
 * If not, or the cookie is outdated, backend should return 401 Unauthorized error.
 * GUI should catch this error and redirect to login page.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authenticated: boolean = false;
  private _loginUrl = '/api/user/login';

  constructor(private http: HttpClient) { }

  authenticate(login: {
    login: string;
    password: string;
  }): Observable<boolean> {
    return this.http.post<any>(this._loginUrl, login)
      .pipe(
        map(resp => {
          this._authenticated = true;
          return true;
        }),
        catchError(e => {
          this._authenticated = false;
          return of(false);
        }));
  }

  isAuthenticated(): boolean {
    return this._authenticated;
  }
}
