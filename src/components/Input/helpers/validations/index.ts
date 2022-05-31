import validator from 'validator';

import {
  registerDocumentPayload,
  registerNameBirthdatePayload,
} from '../../../../store/reducers/user/types';
import findCurrentStep from '../../../../views/register/CpfCnpj/helpers/findCurrentStep';

export const cpfcnpjValidations = async ({
  cnpj,
  document,
}: registerDocumentPayload) => {
  const CNPJ_LENGTH = 14;
  const CPF_LENGTH = 11;
  const DOCUMENT_LENGTH = document.length;

  const DOCUMENT_TOO_SHORT = DOCUMENT_LENGTH < CPF_LENGTH;
  const DOCUMENT_TOO_BIG = DOCUMENT_LENGTH > CNPJ_LENGTH;
  const DOCUMENT_INVALID_SIZE =
    DOCUMENT_LENGTH > CPF_LENGTH && DOCUMENT_LENGTH < CNPJ_LENGTH;

  if (DOCUMENT_LENGTH === 0) return 'Campo Obrigatório.';
  if (!validator.isInt(document)) return 'Caracteres inválidos.';
  if (DOCUMENT_TOO_SHORT) return 'Mínimo permitido: 11 dígitos.';
  if (DOCUMENT_TOO_BIG) return 'Máximo permitido: 14 dígitos.';
  if (DOCUMENT_INVALID_SIZE) return 'Dígitos entre: 11 e 14 são inválidos';

  const currentStep = await findCurrentStep({ cnpj, document });
  if (currentStep === 'step_four') return 'CPF/CNPJ já cadastrado.';

  return '';
};

export const fullName = ({ name }: registerNameBirthdatePayload) => {
  const fullNameSplited = name.split(' ');

  const FIRST_NAME = fullNameSplited[0];
  const LAST_NAME = fullNameSplited[1];

  const EMPTY_FULLNAME = name?.length === 0;
  const FIRST_NAME_LENGTH = FIRST_NAME?.length >= 3;
  const HAS_TWO_NAMES = fullNameSplited?.length >= 2;
  const LAST_NAME_LENGTH = LAST_NAME?.length >= 2;
  const FULLNAME_LENGTH = name?.length >= 50;

  if (EMPTY_FULLNAME) return 'Campo obrigatório.';
  if (!FIRST_NAME_LENGTH)
    return 'Primeiro nome precisa conter ao menos 3 dígitos.';
  if (!HAS_TWO_NAMES) return 'Por favor, insira nome e sobrenome.';
  if (!LAST_NAME_LENGTH) return 'Sobrenome precisa conter ao menos 2 dígitos.';
  if (FULLNAME_LENGTH) return 'Máxima quantidade de caractéres é 50.';

  return '';
};
