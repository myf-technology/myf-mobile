import { instance } from '../../../services';

export interface ILoginServiceProps {
  email: string;
  password: string;
}

export const loginService = (data: ILoginServiceProps) =>
  instance({
    method: 'POST',
    url: '/identity/login',
    data,
  });
