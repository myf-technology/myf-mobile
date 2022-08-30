import axios from 'axios';

export const instance = axios.create({
  baseURL:
    // 'http://placekitten.com',
    'http://myfinancesdev-env.eba-tkwfqquz.us-east-1.elasticbeanstalk.com',
});
