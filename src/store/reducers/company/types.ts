import { COMPANY_REGISTER } from './constants';

export interface RegisterCompanyNamePayload {
  socialName: string;
  fantasyName: string;
  revenues: number;
}

// todo [refactor]: make it dynamic
export interface RegisterCompanyDocumentPayload {
  document: string;
}

export interface RegisterCompanyEmailPayload {
  email: string;
}
export interface RegisterCompanyPhonePayload {
  phone: string;
}

//

export interface RegisterCompanyPayload {
  document: string;
  socialName: string;
  fantasyName: string;
  email: string;
  phone: string;
  revenues: number;
}

export type actionTypePayloads = RegisterCompanyNamePayload &
  RegisterCompanyDocumentPayload &
  RegisterCompanyEmailPayload &
  RegisterCompanyPhonePayload &
  registerCompanySyncPayload;

export type actionTypeConstants =
  | COMPANY_REGISTER.NAME
  | COMPANY_REGISTER.DOCUMENT
  | COMPANY_REGISTER.EMAIL
  | COMPANY_REGISTER.PHONE
  | COMPANY_REGISTER.SYNC;
export interface ActionType {
  type: actionTypeConstants;
  payload: actionTypePayloads;
}

export interface RegisterCompanySyncSuccess {
  loading: false;
  errorMessage: null;
  uuid: string;
  status: 'success';
}

export interface RegisterCompanySyncFail {
  loading: false;
  errorMessage: string;
  status: 'fail';
  uuid: null;
}

export type registerCompanySyncPayload =
  | RegisterCompanySyncSuccess
  | RegisterCompanySyncFail;

export interface RegisterCompanyRootState {
  document: string;
  socialName: string;
  fantasyName: string;
  email: string;
  phone: string;
  revenues: number;
  uuid: string | null;
  control: {
    status: null | 'success' | 'error';
    loading: boolean;
    errorMessage: null | string;
  };
}
