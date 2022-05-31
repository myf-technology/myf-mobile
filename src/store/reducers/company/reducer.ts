import { COMPANY_REGISTER } from './constants';
import rootState from './rootState';
import { ActionType } from './types';

export default (state = rootState, action: ActionType) => {
  switch (action.type) {
    case COMPANY_REGISTER.NAME:
      return {
        ...state,
        socialName: action.payload.socialName,
        fantasyName: action.payload.fantasyName,
        revenues: action.payload.revenues,
      };

    // todo [refactor]: make it dynamic
    case COMPANY_REGISTER.DOCUMENT:
      return {
        ...state,
        document: action.payload.document,
      };

    case COMPANY_REGISTER.EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };

    case COMPANY_REGISTER.PHONE:
      return {
        ...state,
        phone: action.payload.phone,
      };
    //

    case COMPANY_REGISTER.SYNC:
      return {
        ...state,
        uuid: action.payload.uuid,
        control: {
          ...state.control,
          loading: action.payload.loading,
          errorMessage: action.payload.errorMessage,
          status: action.payload.status,
        },
      };

    default:
      return state;
  }
};
