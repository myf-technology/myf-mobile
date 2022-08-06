import instance from '..';

interface createUserDataProps {
  email: string;
  password: string;
  fullName: string;
}

export const createUserService = async (data: createUserDataProps) => {
  try {
    const res = await instance.post('/identity/register', data);

    return res;
  } catch (error) {
    return error.response;
  }
};

export const validateTokenService = async (token: string) => {
  try {
    const res = await instance.patch(`/identity/verifyEmail?token=${token}`);

    return res;
  } catch (error) {
    return error.response;
  }
};

export const resendTokenService = async (email: string) => {
  try {
    const res = await instance.post('/identity/sendEmailToken', { email });

    return res;
  } catch (error) {
    return error.response;
  }
};
