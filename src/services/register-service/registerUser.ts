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
