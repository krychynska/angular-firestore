import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, exhaustMap, map, switchMap, tap} from 'rxjs/operators';
import {Authenticate, DoLogin, LoginActionTypes, LoginFailed, LoginSuccessful, LogoutDone} from './login.actions';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './login.component';
import {LoginService} from '../shared/services/login.service';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
@Injectable()
export class LoginEffects {

  @Effect() authenticate$ = this.actions$.pipe(
    ofType(LoginActionTypes.AUTHENTICATE),
    exhaustMap(() => {
      this.dialog.open(LoginComponent,  {
        width: '400px',
        disableClose: true
      });
      return of();
    })
  );

 @Effect() doLogin$ = this.actions$.pipe(
    ofType(LoginActionTypes.DO_LOGIN),
    map((action: DoLogin) => action.payload),
    exhaustMap((payload) => {
      return this.loginService.doLogin(payload.username).pipe(
        map(data => new LoginSuccessful({
          username: data
        })),
        catchError(error => of(new LoginFailed(error)))
      );
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(LoginActionTypes.DO_LOGOUT),
    switchMap(() => {
      this.loginService.doLogout();
      return of(new LogoutDone());
    })
  );

  @Effect({dispatch: false})
  logoutDone$ = this.actions$.pipe(
    ofType(LoginActionTypes.LOGOUT_DONE),
    tap(() => {
       this.store.dispatch(new Authenticate());
      }
    )
  );

  constructor(private actions$: Actions,
              private store: Store<any>,
              private router: Router,
              private loginService: LoginService,
              private  dialog: MatDialog) {}
}
