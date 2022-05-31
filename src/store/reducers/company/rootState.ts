import { RegisterCompanyRootState } from './types';

export default {
  document: '',
  socialName: '',
  fantasyName: '',
  email: '',
  phone: '',
  revenues: 0,
  uuid: null,
  control: {
    status: null,
    loading: false,
    errorMessage: null,
  },
} as RegisterCompanyRootState;
