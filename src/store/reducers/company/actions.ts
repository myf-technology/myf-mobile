import { Dispatch } from 'redux';

import { COMPANY_REGISTER } from './constants';
import {
  RegisterCompanyNamePayload,
  RegisterCompanyDocumentPayload,
  RegisterCompanyPhonePayload,
  RegisterCompanyEmailPayload,
  registerCompanySyncPayload,
} from './types';

import { registerCompanyAPI } from '../../../services/register-service';
import { Store } from '../../types';

// sync
export const registerCompanyName = (payload: RegisterCompanyNamePayload) => ({
  type: COMPANY_REGISTER.NAME,
  payload,
});

// todo [refactor]: make it dynamic
export const registerCompanyDocument = (
  payload: RegisterCompanyDocumentPayload
) => ({
  type: COMPANY_REGISTER.DOCUMENT,
  payload,
});

export const registerCompanyEmail = (payload: RegisterCompanyEmailPayload) => ({
  type: COMPANY_REGISTER.EMAIL,
  payload,
});

export const registerCompanyPhone = (payload: RegisterCompanyPhonePayload) => ({
  type: COMPANY_REGISTER.PHONE,
  payload,
});
//

export const registerCompanySync = (payload: registerCompanySyncPayload) => ({
  type: COMPANY_REGISTER.SYNC,
  payload,
});

// async

export type registerCompanyGetState = () => Store;

export const registerCompany =
  () => async (dispatch: Dispatch, getState: registerCompanyGetState) => {
    try {
      const {
        company: { document, email, fantasyName, phone, revenues, socialName },
      } = getState();

      const res = await registerCompanyAPI({
        document,
        email,
        phone,
        revenues,
        legal_name: socialName,
        fantasy_name: fantasyName,
      });

      console.log({ res });
      dispatch(
        registerCompanySync({
          errorMessage: null,
          loading: false,
          status: 'success',
          uuid: res?.data?.uuid,
        })
      );
    } catch (error) {
      console.log(error?.response?.data);

      dispatch(
        registerCompanySync({
          errorMessage: error?.response,
          loading: false,
          status: 'fail',
          uuid: null,
        })
      );
    }
  };
