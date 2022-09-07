import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const instance = axios.create({
  baseURL:
    // 'http://placekitten.com',
    'http://myfinancesdev-env.eba-tkwfqquz.us-east-1.elasticbeanstalk.com',
});

export const authInstance = axios.create({
  baseURL:
    'http://myfinancesdev-env.eba-tkwfqquz.us-east-1.elasticbeanstalk.com',
});

authInstance.interceptors.request.use(async (config: any) => {
  const token = await AsyncStorage.getItem('@bearer_token');

  if (token) {
    config.headers.authorization = token;
    return config;
  }
});
