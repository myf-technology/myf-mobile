import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dev-api-bank.valepay.com.br/v1/app',
});

// [TODO]: add auth.
export const authInstance = axios.create({
  baseURL: 'localhost:3000',
  auth: undefined,
});

export default instance;
