import {LoginActions, LoginActionTypes} from './login.actions';
import {Role} from '../shared/models/role';


export interface State {
  username: string | null;
  error: string;
  isAuthenticated: boolean;
  permissions: Role[];
  selectedPermission: Role | null;
  url: string;
}

export const initialState: State = {
  username: null,
  error: null,
  isAuthenticated: false,
  permissions: null,
  selectedPermission: null,
  url: null
};

export function reducer(state = initialState,  action: LoginActions): State {
  switch (action.type) {
    case LoginActionTypes.LOGIN_SUCCESSFUL: {
      return {
        ...state,
        username: action.payload.username,
        isAuthenticated: true
      };
    }
    case LoginActionTypes.GET_PERMISSIONS_SUCCESSFUL: {
      return {
        ...state,
        url: action.payload.url,
        permissions: action.payload.permissions
      };
    }
    case LoginActionTypes.GET_PERMISSIONS_FAILED: {
      return {
        ...state,
        error: action.payload.error
      };
    }
    case LoginActionTypes.PERMISSION_SELECTED: {
      return {
        ...state,
        selectedPermission: action.payload.selectedPermission
      };
    }

    case LoginActionTypes.DO_LOGOUT: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
}

export const getUsername = (state: State) => state.username;
export const getIsAuthenticated = (state: State) => state.isAuthenticated;
export const getPermissions = (state: State) => state.permissions;
export const getSelectedPermission = (state: State) => state.selectedPermission;
