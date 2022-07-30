import { USER_REGISTER } from './constants';
import { StoreEmailActionPayload } from './types';

export const storeEmailAction = (payload: StoreEmailActionPayload) => ({
  type: USER_REGISTER.EMAIL,
  payload,
});
