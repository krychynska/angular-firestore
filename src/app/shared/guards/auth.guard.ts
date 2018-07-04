import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private  dialog: MatDialog) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !!localStorage.getItem('username');

  }
  canLoad(route: Route) {
    return true;
  }
}
