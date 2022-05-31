import instance from '..';

export const authenticationAPI = async (data: {
  cpf: string;
  password: string;
}) => {
  try {
    const res = await instance.post('/authenticate', data);

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
