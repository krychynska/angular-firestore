import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../reducers';
import {Authorize} from '../../login/login.actions';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate, CanLoad {
  constructor(private  store: Store<fromAuth.State>) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (next.queryParams.role) {
      return true;
    } else {
      this.store.dispatch(new Authorize({url: state.url}));
      return false;
    }
  }
  canLoad(route: Route) {
    return true;
  }
}
