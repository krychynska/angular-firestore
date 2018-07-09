import {LoginActions, LoginActionTypes} from './login.actions';


export interface State {
  username: string | null;
  error: string;
  isAuthenticated: boolean;
}

export const initialState: State = {
  username: null,
  error: null,
  isAuthenticated: false
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
