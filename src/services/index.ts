import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://myfinancesdev-env.eba-tkwfqquz.us-east-1.elasticbeanstalk.com/'
});

// [TODO]: add auth.
export const authInstance = axios.create({
  baseURL: 'localhost:3000',
  auth: undefined
});

export default instance;
