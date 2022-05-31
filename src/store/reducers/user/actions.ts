import { USER_REGISTER } from './constants';
import {
  registerAddressPayload,
  registerDocumentPayload,
  registerEmailMobilePayload,
  registerNameBirthdatePayload,
  registerPasswordPayload,
  registerSelfiePayload,
  registerDocumentFrontImagePayload,
  registerDocumentBackImagePayload,
  registerUserPushNotificationTokenPayload,
} from './types';

export const registerDocument = (payload: registerDocumentPayload) => ({
  type: USER_REGISTER.DOCUMENT,
  payload,
});

export const registerEmailMobile = (payload: registerEmailMobilePayload) => ({
  type: USER_REGISTER.EMAIL_MOBILE,
  payload,
});

export const registerNameBirthdate = (
  payload: registerNameBirthdatePayload
) => ({
  type: USER_REGISTER.NAME_BIRTHDATE,
  payload,
});

export const registerAddress = (payload: registerAddressPayload) => ({
  type: USER_REGISTER.ADDRESS,
  payload,
});

export const registerPassword = (payload: registerPasswordPayload) => ({
  type: USER_REGISTER.PASSWORD,
  payload,
});

export const registerSelfie = (payload: registerSelfiePayload) => ({
  type: USER_REGISTER.SELFIE,
  payload,
});

export const registerDocumentFrontImage = (
  payload: registerDocumentFrontImagePayload
) => ({
  type: USER_REGISTER.DOCUMENT_FRONT_IMAGE,
  payload,
});

export const registerDocumentBackImage = (
  payload: registerDocumentBackImagePayload
) => ({
  type: USER_REGISTER.DOCUMENT_BACK_IMAGE,
  payload,
});

export const registerUserPushNotificationToken = (
  payload: registerUserPushNotificationTokenPayload
) => ({
  type: USER_REGISTER.PUSH_NOTIFICATION_TOKEN,
  payload,
});
