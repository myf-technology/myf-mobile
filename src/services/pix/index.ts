import instance from '..';
import { readToken } from '../../storage/storageToken';

export const putValidateTokenAPI = async (data, uuid) => {
  try {
    const Authorization = await readToken();

    const res = await instance({
      method: 'PUT',
      url: `/baas/pix/address-keys/${uuid}/activate`,
      data: data,
      headers: {
        Authorization: Authorization,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const postRegisterNewAdressAPI = async (data) => {
  try {
    const Authorization = await readToken();

    const res = await instance({
      method: 'POST',
      url: 'baas/pix/address-keys',
      data: data,
      headers: {
        Authorization: Authorization,
      },
    });

    console.log(res);
    return res;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
