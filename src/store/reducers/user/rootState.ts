import { userRootState } from './types';

const rootState: userRootState = {
  isPep: false,
  cnpj: false,
  document: '',
  name: '',
  birthdate: '',
  email: '',
  mobile: '',
  password: '',
  exponentToken: null,
  devicePushToken: {
    type: null,
    data: null,
  },
  deviceId: '',
  notificationToken: '',
  selfie: '',
  uuid: '',
  documentFrontImage: '',
  documentBackImage: '',
  address: {
    zipcode: '',
    street: '',
    number: '',
    complemento: '',
    district: '',
    state: '',
    city: '',
  },
};

export default rootState;
