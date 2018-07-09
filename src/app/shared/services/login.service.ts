import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(data): Observable<string> {
    localStorage.setItem('username', data);
    return of(data);
  }

  doLogout(): Observable<any> {
    localStorage.removeItem('username');
    return of();
  }
}
