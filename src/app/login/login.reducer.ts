import { Action } from '@ngrx/store';


export interface State {
  user: string | null;
  error: string;
  isAuthenticated: boolean;
}

export const initialState: State = {
  user: null,
  error: null,
  isAuthenticated: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
