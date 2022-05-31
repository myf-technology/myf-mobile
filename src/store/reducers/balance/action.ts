import { BALANCE } from './constants';

import { getBalanceAPI } from '../../../services/balance';

const getBalanceSuccess = (payload) => ({
  type: BALANCE.GET,
  payload,
});

const getBalanceError = (payload) => ({
  type: BALANCE.GET_ERROR,
  payload,
});

export const getBalance = () => async (dispatch) => {
  try {
    const res = await getBalanceAPI();
    if (res.status === 200) {
      const data = {
        data: {
          freeAmount: res.data.data.free_amount,
        },
      };

      dispatch(getBalanceSuccess(data));
    }
  } catch (error) {
    // todo: handle error
    console.log(error.response.status);
  }
};
