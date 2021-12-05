import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

    authenticate(login: {
        username: string;
        password: string;
    }): Observable<boolean> {
        if (login.username === 'admin' && login.password == 'admin') {
            return of(true);
        } else {
            return of(false);
        }
    }
}