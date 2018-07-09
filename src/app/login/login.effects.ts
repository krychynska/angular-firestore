import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, exhaustMap, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {
  Authenticate, Authorize,
  DoLogin, DoLogout, GetPermissions,
  GetPermissionsFailed,
  GetPermissionsSuccessful,
  LoginActionTypes,
  LoginFailed,
  LoginSuccessful,
  LogoutDone
} from './login.actions';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './login.component';
import {LoginService} from '../shared/services/login.service';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {SelectPermissionComponent} from '../select-permission/select-permission.component';
import {selectLoginState} from '../reducers';

@Injectable()
export class LoginEffects {

  @Effect() authenticate$ = this.actions$.pipe(
    ofType(LoginActionTypes.AUTHENTICATE),
    exhaustMap(() => {
      this.dialog.open(LoginComponent, {
        width: '400px',
        disableClose: true
      });
      return of();
    })
  );

  @Effect() authorize$ = this.actions$.pipe(
    ofType(LoginActionTypes.AUTHORIZE),
    map((action: Authorize) => action.payload),
    exhaustMap((payload) => {
      this.dialog.open(SelectPermissionComponent, {
        width: '400px',
        disableClose: true
      });
      return of(new GetPermissions({url: payload.url}));
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

  @Effect() getPermissions$ = this.actions$.pipe(
    ofType(LoginActionTypes.GET_PERMISSIONS),
    withLatestFrom(this.store.select(selectLoginState)),
    switchMap(([action, storeState]) => {
      return this.loginService.getPermissions().pipe(
        map(data => new GetPermissionsSuccessful({
          permissions: data,
          url: storeState.url
        })),
        catchError(error => of(new GetPermissionsFailed(error)))
      );
    })
  );

  @Effect()
  permissionSelected$ = this.actions$.pipe(
    ofType(LoginActionTypes.PERMISSION_SELECTED),
    withLatestFrom(this.store.select(selectLoginState)),
    switchMap(([action, storeState]) => {
      console.log(storeState, 'storeState');
      const urlTree = this.router.parseUrl(storeState.url ? storeState.url : '');
      urlTree.queryParams['role'] = storeState.selectedPermission.role;
      console.log(urlTree, 'urlTree');
      this.router.navigateByUrl(urlTree);
      return of();
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(LoginActionTypes.DO_LOGOUT),
    map((action: DoLogout) => action.payload),
    switchMap((payload) => {
      this.loginService.doLogout();
      return of(new LogoutDone());
    })
  );

  @Effect({dispatch: false})
  logoutDone$ = this.actions$.pipe(
    ofType(LoginActionTypes.LOGOUT_DONE),
    withLatestFrom(this.store.select(selectLoginState)),
    switchMap(([action, storeState]) => {
      this.store.dispatch(new Authenticate({url: storeState.url}));
      return of();
    })
  );

  constructor(private actions$: Actions,
              private store: Store<any>,
              private router: Router,
              private loginService: LoginService,
              private  dialog: MatDialog) {
  }
}
