import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS } from './constants';
import { IAuth } from './types';

const initialState: IAuth = {
  auth: '',
  loading: false,
};

// [TODO]: create a generic interface for action type
const reducer = (state = initialState, action): IAuth => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        auth: action.payload,
      };

    case AUTH_ERROR:
      return {
        ...state,
        auth: action.payload,
      };

    case AUTH_LOADING:
      return {
        ...state,
        auth: '',
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
