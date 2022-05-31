import { RECHARGE } from './constants';
import rootState from './rootState';

export default (state = rootState, action) => {
  switch (action.type) {
    case RECHARGE.GET_OPERATORS:
      return {
        ...state,
        operators: action.payload.operators,
        reference: action.payload.reference,
        ddd: action.payload.ddd,
        phoneNumber: action.payload.phoneNumber,
        loading: action.payload.loading,
      };

    case RECHARGE.GET_OPERATOR_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case RECHARGE.SELECTED_OPERATOR:
      return {
        ...state,
        selectedOperatorId: action.payload.operatorId,
        name: action.payload.company,
      };
    // newState.selectedOperatorId = action.payload.operatorId;

    case RECHARGE.GET_PRODUCTS:
      return {
        ...state,
        loading: action.payload.loading,
        products: action.payload.products,
      };

    case RECHARGE.SELECTED_PRODUCTS:
      return {
        ...state,
        valor: action.payload.valor,
        idProduto: action.payload.idProduto,
      };

    default:
      return state;
  }
};
