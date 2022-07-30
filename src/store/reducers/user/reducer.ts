import { Action } from 'redux';
import { USER_REGISTER } from './constants';
import rootState from './rootState';
import { StoreEmailActionPayload } from './types';

interface UserReducerAction extends Action<USER_REGISTER> {
  payload: StoreEmailActionPayload;
}

export default (state = rootState, action: UserReducerAction) => {
  switch (action.type) {
    case USER_REGISTER.EMAIL:
      const {
        payload: { email },
      } = action;

      return {
        ...state,
        email,
      };
    default:
      return state;
  }
};
