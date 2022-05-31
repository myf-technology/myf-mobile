import { USER_REGISTER } from './constants';
import rootState from './rootState';
import { IuserActions } from './types';

export default (state = rootState, action: IuserActions) => {
  switch (action.type) {
    case USER_REGISTER.DOCUMENT:
      return {
        ...state,
        document: action.payload.document,
        cnpj: action.payload.cnpj,
      };

    case USER_REGISTER.EMAIL_MOBILE:
      return {
        ...state,
        email: action.payload.email,
        mobile: action.payload.mobile,
        uuid: action.payload.uuid,
      };

    case USER_REGISTER.NAME_BIRTHDATE:
      return {
        ...state,
        name: action.payload.name,
        birthdate: action.payload.birthdate,
        isPep: action.payload.isPep,
      };

    case USER_REGISTER.ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          zipcode: action.payload.zipcode,
          street: action.payload.street,
          number: action.payload.number,
          complemento: action.payload.complemento,
          district: action.payload.district,
          state: action.payload.state,
          city: action.payload.city,
        },
      };
    case USER_REGISTER.PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };

    case USER_REGISTER.SELFIE:
      return {
        ...state,
        selfie: action.payload.selfie,
      };

    case USER_REGISTER.DOCUMENT_FRONT_IMAGE:
      return {
        ...state,
        documentFrontImage: action.payload.documentFrontImage,
      };

    case USER_REGISTER.DOCUMENT_BACK_IMAGE:
      return {
        ...state,
        documentBackImage: action.payload.documentBackImage,
      };

    case USER_REGISTER.PUSH_NOTIFICATION_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
