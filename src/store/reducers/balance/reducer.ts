import { BALANCE } from './constants';
import rootState from './rootState';

export default (state = rootState, action) => {
  switch (action.type) {
    // case BALANCE.GET:
    //   return {
    //     ...state,
    //     ...action.payload.data,
    //     state: {
    //       controls: {
    //         ...state.controls,
    //         ...action.payload.controls,
    //       },
    //     },
    //   };
    case BALANCE.GET:
      return {
        ...state,
        freeAmount: action.payload.data.freeAmount,
      };

    default:
      return state;
  }
};
