export interface paymentRootState<T> {
  amount: T | number;
  barcode: T | string;
  beneficiary: T | string;
  date_due: T | string;
  date_limmit_payment: T | string;
  digitableLine: T | string;
  documentPayer: T | string;
  payer: T | string;
  controls: {
    status: T | 'ERROR' | 'SUCCESS' | 'LOADING';
    message: T | string;
    paymentStatus: T | string;
  };
}

const rootState: paymentRootState<null> = {
  amount: null,
  barcode: null,
  beneficiary: null,
  date_due: null,
  date_limmit_payment: null,
  digitableLine: null,
  documentPayer: null,
  payer: null,
  controls: {
    status: null,
    message: null,
    paymentStatus: null,
  },
};

export default rootState;
