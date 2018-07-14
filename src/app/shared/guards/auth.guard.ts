import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {Authenticate, LoginSuccessful} from '../../login/login.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<any>) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('username')) {
      this.store.dispatch(new LoginSuccessful({username: localStorage.getItem('username'), url: state.url}));
      return true;
    } else {
      this.store.dispatch(new Authenticate({url: state.url}));
      return false;
    }
  }
  canLoad(route: Route) {
    return true;
  }
}
