import { PAYMENT } from './constants';
import rootState from './rootState';

export default (state = rootState, action) => {
  switch (action.type) {
    case PAYMENT.BAR_CODE:
      return {
        ...state,
        ...action.payload,
        controls: {
          ...state.controls,
          ...action.payload.controls
        }
      };
    case PAYMENT.PAY:
      return {
        ...state,
        controls: {
          ...state.controls,
          ...action.payload.controls
        }
      };
    default:
      return state;
  }
};
