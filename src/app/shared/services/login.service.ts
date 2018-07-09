import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Role} from '../models/role';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {map} from 'rxjs/operators';

export const Roles: Role[] = [
  {'role': 'admin'},
  {'role': 'user'},
];

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

  getPermissions(): Observable<Role[]> {
   // return fromArray<Role[]>([Roles]);
    return of(Roles);
  }
}
