import { validateDocument } from '../../../../services/register-service';
import { registerDocumentPayload } from '../../../../store/reducers/user/types';

export default async (payload: registerDocumentPayload) => {
  const res = await validateDocument({
    document: payload.document,
    is_cnpj: payload.cnpj,
  });

  const data = res.data;
  let currStep!: string;

  for (const key in data) {
    if (data[key] === 1) {
      currStep = key;
    }
  }

  return currStep;
};
