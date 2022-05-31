import { USER_REGISTER } from './constants';

export type userRegisterConstants = USER_REGISTER.DOCUMENT &
  USER_REGISTER.EMAIL_MOBILE &
  USER_REGISTER.NAME_BIRTHDATE &
  USER_REGISTER.ADDRESS &
  USER_REGISTER.PASSWORD &
  USER_REGISTER.SELFIE &
  USER_REGISTER.DOCUMENT_FRONT_IMAGE &
  USER_REGISTER.DOCUMENT_BACK_IMAGE;

export type userRegisterPayloads = registerDocumentPayload &
  registerEmailMobilePayload &
  registerNameBirthdatePayload &
  registerAddressPayload &
  registerPasswordPayload &
  registerSelfiePayload &
  registerDocumentFrontImagePayload &
  registerDocumentBackImagePayload;

export interface IuserActions {
  type: userRegisterConstants;
  payload: userRegisterPayloads;
}

export interface registerDocumentPayload {
  cnpj: boolean;
  document: string;
}

export interface registerEmailMobilePayload {
  email: string;
  mobile: string;
  uuid: string;
}

export interface registerNameBirthdatePayload {
  name: string;
  birthdate: string;
}

export interface registerAddressPayload {
  zipcode: string;
  street: string;
  number: string;
  complemento: string;
  district: string;
  state: string;
  city: string;
}
export interface registerPasswordPayload {
  password: string;
}
export interface registerSelfiePayload {
  selfie: string;
}
export interface registerDocumentFrontImagePayload {
  documentFrontImage: string;
}

export interface registerDocumentBackImagePayload {
  documentBackImage: string;
}

type devicePushToken = {
  type: 'ios' | 'android' | null;
  data: string | null;
};
export interface registerUserPushNotificationTokenPayload {
  exponentToken: string | null;
  devicePushToken: devicePushToken;
}

export interface userRootState {
  exponentToken: string | null;
  devicePushToken: devicePushToken;
  cnpj: boolean;
  document: string;
  uuid: string;
  name: string;
  birthdate: string;
  email: string;
  mobile: string;
  password: string;
  deviceId: string;
  notificationToken: string;
  selfie: string;
  documentFrontImage: string;
  documentBackImage: string;
  address: {
    zipcode: string;
    street: string;
    number: string;
    complemento: string;
    district: string;
    state: string;
    city: string;
  };
}
