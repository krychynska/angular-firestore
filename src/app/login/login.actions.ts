import {Action} from '@ngrx/store';

export enum LoginActionTypes {
  AUTHENTICATE = '[Login] authenticate',
  DO_LOGIN = '[Login] do login',
  LOGIN_SUCCESSFUL = '[Login] login successful',
  LOGIN_FAILED = '[Login] login failed',
  DO_LOGOUT = '[Login] do logout',
  LOGOUT_DONE = '[Login] logout done',
  GET_PERMISSIONS = '[Login] get permissions',
  GET_PERMISSIONS_SUCCESSFUL = '[Login] permissions loaded successfully',
  GET_PERMISSIONS_FAILED = '[Login] permissions failed',
}

export class Authenticate implements Action {
  readonly type = LoginActionTypes.AUTHENTICATE;

  constructor() {

  }
}

export class DoLogin implements Action {
  readonly type = LoginActionTypes.DO_LOGIN;

  constructor() {

  }
}

export class LoginSuccessful implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESSFUL;

  constructor() {
  }
}

export class LoginFailed implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILED;

  constructor(public payload: { error: any }) {

  }
}

export class DoLogout implements Action {
  readonly type = LoginActionTypes.DO_LOGOUT;

  constructor() {

  }
}

export class LogoutDone implements Action {
  readonly type = LoginActionTypes.LOGOUT_DONE;
}

export class GetPermissions implements Action {
  readonly type = LoginActionTypes.GET_PERMISSIONS;

  constructor() {

  }
}

export class GetPermissionsSuccessful implements Action {
  readonly type = LoginActionTypes.GET_PERMISSIONS_SUCCESSFUL;

  constructor(public payload: { permissions: any }) {
  }
}

export class GetPermissionsFailed implements Action {
  readonly type = LoginActionTypes.GET_PERMISSIONS_FAILED;

  constructor(public payload: { error: any }) {

  }
}

export type Action =
  Authenticate |
  DoLogin |
  DoLogout |
  LoginFailed |
  LoginSuccessful |
  LogoutDone |
  GetPermissions |
  GetPermissionsSuccessful |
  GetPermissionsFailed;
