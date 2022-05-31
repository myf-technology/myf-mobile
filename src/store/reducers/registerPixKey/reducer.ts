import { REGISTERKEY } from './constants';
import rootState from './rootState';

export default (state = rootState, action) => {
  switch (action) {
    case REGISTERKEY.NEW_ADRESS:
      return {
        ...state,
        type: action.payload.type,
        value: action.payload.value,
        uuid: action.payload.value,
      };

      break;

    default:
      return state;
  }
};
