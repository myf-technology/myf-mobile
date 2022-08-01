import { registerCompanyData, registerCompanyParams } from './types';

import instance from '..';
import { readToken } from '../../storage/storageToken';

// [TODO]: remove type from here
interface registerAddressAPIParams {
  uuid?: string | null;
  zipcode?: string;
  isCompany?: boolean;
  complement?: string;
  number?: string;
  street?: string;
  district?: string;
  state?: string;
  city?: string;
}

export const validateDocument = async (data: { document: string; is_cnpj: boolean }) => {
  try {
    const res = await instance.post('/check_register', data);

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerCompanyRepresentative = async (data: any) => {
  try {
    const res = await instance.post('/register/company/physical', data);

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerPhysicalPerson = async (data: object) => {
  try {
    const response = await instance.post('/register/start/physical', data);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerAddressAPI = async (data) => {
  try {
    const response = await instance.post('/register/address', data);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export interface registerPasswordAPIParams {
  uuid: string | null;
  is_company: boolean;
  password: string;
}

export const registerPasswordAPI = async (data: registerPasswordAPIParams) => {
  try {
    const res = await instance.post('/register/user', data);

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

interface IregisterUploadImages {
  type: 'SELFIE' | 'DOCUMENT_FRONT' | 'DOCUMENT_BACK' | 'ADDRESS';
  uuid: string | null;
  image: string | Blob;
  cnpj: boolean;
}

export const registerUploadImages = async ({ cnpj, ...rest }: IregisterUploadImages) => {
  try {
    const res = await instance.post('/register/upload/docs', {
      is_cnpj: cnpj,
      ...rest
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerCompanyAPI = async (
  data: registerCompanyParams
): Promise<registerCompanyData> => {
  const request = await instance.post('/register/start/company', data);

  return request.data;
};

export const getCEPAddressAPI = async (CEP) => {
  try {
    const Authorization = await readToken();
    const res = await instance({
      method: 'GET',
      url: `/address/${CEP}`,
      headers: {
        Authorization: Authorization
      }
    });

    return res.data;
  } catch (error) {
    return error;
  }
};
