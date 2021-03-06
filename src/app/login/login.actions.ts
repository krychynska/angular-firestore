import {Action} from '@ngrx/store';
import {Role} from '../shared/models/role';

export enum LoginActionTypes {
  AUTHENTICATE = '[Login] authenticate',
  AUTHORIZE = '[Login] authorize',
  DO_LOGIN = '[Login] do login',
  LOGIN_SUCCESSFUL = '[Login] login successful',
  LOGIN_FAILED = '[Login] login failed',
  DO_LOGOUT = '[Login] do logout',
  LOGOUT_DONE = '[Login] logout done',
  GET_PERMISSIONS = '[Login] get permissions',
  GET_PERMISSIONS_SUCCESSFUL = '[Login] permissions loaded successfully',
  GET_PERMISSIONS_FAILED = '[Login] permissions failed',
  PERMISSION_SELECTED = '[Login] select permission'
}

export class Authenticate implements Action {
  readonly type = LoginActionTypes.AUTHENTICATE;

  constructor(public payload: {url: string}) {

  }
}

export class Authorize implements Action {
  readonly type = LoginActionTypes.AUTHORIZE;

  constructor(public payload: {url: string}) {

  }
}

export class DoLogin implements Action {
  readonly type = LoginActionTypes.DO_LOGIN;

  constructor(public payload: { username: string }) {

  }
}

export class LoginSuccessful implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESSFUL;

  constructor(public payload: { username: string }) {
  }
}

export class LoginFailed implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILED;

  constructor(public payload: { error: any }) {

  }
}

export class DoLogout implements Action {
  readonly type = LoginActionTypes.DO_LOGOUT;

  constructor(public payload: { url: string }) {

  }
}

export class LogoutDone implements Action {
  readonly type = LoginActionTypes.LOGOUT_DONE;
}

export class GetPermissions implements Action {
  readonly type = LoginActionTypes.GET_PERMISSIONS;

  constructor(public payload: { url: string }) {

  }
}

export class GetPermissionsSuccessful implements Action {
  readonly type = LoginActionTypes.GET_PERMISSIONS_SUCCESSFUL;

  constructor(public payload: { permissions: Role[], url: string }) {
  }
}

export class GetPermissionsFailed implements Action {
  readonly type = LoginActionTypes.GET_PERMISSIONS_FAILED;

  constructor(public payload: { error: any }) {

  }
}

export class PermissionSelected implements Action {
  readonly type = LoginActionTypes.PERMISSION_SELECTED;

  constructor(public payload: { selectedPermission: Role }) {

  }
}

export type LoginActions =
  Authenticate |
  Authorize |
  DoLogin |
  DoLogout |
  LoginFailed |
  LoginSuccessful |
  LogoutDone |
  GetPermissions |
  GetPermissionsSuccessful |
  GetPermissionsFailed |
  PermissionSelected;
