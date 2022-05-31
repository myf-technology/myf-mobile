import { Dispatch } from 'redux';

import { AUTH_SUCCESS, AUTH_ERROR, AUTH_LOADING } from './constants';

import { registerService } from '../../../services/register-service';

// [TODO]: create a interface for payload
export const authSuccess = (payload: string) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authError = (payload: string) => ({
  type: AUTH_ERROR,
  payload,
});

export const authLoading = (payload: boolean) => ({
  type: AUTH_LOADING,
  payload,
});

// [TODO]: create a interface for the actions
export const somethingAsync = () => async (dispatch: Dispatch) => {
  dispatch(authLoading(true));

  try {
    const res = await registerService();

    dispatch(authLoading(false));
    dispatch(authSuccess(res.title));
  } catch (error) {
    dispatch(authLoading(false));
    dispatch(authError(error.message));
  }
};
