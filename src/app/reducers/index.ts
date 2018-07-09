import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLogin from '../login/login.reducer';

export interface State {
  login: fromLogin.State;
}

export const reducers: ActionReducerMap<State> = {
  login: fromLogin.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectLoginState = createFeatureSelector<fromLogin.State>('login');
export const selectUsername = createSelector(selectLoginState, fromLogin.getUsername);
export const selectIsAuthenticated = createSelector(selectLoginState, fromLogin.getIsAuthenticated);
export const selectPermissions = createSelector(selectLoginState, fromLogin.getPermissions);
export const selectSelectedPermission = createSelector(selectLoginState, fromLogin.getSelectedPermission);

