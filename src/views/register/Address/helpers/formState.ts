import { zipcodeMask } from '../../../../components/Input/helpers/masks';
import { formStateType } from '../types';

const formState: formStateType = [
  {
    id: 'zipcode',
    label: 'CEP',
    value: '',
    errorMessage: '',
    keyboardType: 'numeric',
    maxLength: 9,
    mask: zipcodeMask,
  },
  {
    id: 'street',
    label: 'Endereço',
    value: '',
    errorMessage: '',
    keyboardType: 'default',
    maxLength: 100,
  },
  {
    id: 'number',
    label: 'Número',
    value: '',
    errorMessage: '',
    keyboardType: 'numeric',
    maxLength: 100,
  },
  {
    id: 'complement',
    label: 'Complemento',
    value: '',
    errorMessage: '',
    keyboardType: 'default',
    maxLength: 100,
  },
  {
    id: 'district',
    label: 'Bairro',
    value: '',
    errorMessage: '',
    keyboardType: 'default',
    maxLength: 100,
  },
  {
    id: 'city',
    label: 'Cidade',
    value: '',
    errorMessage: '',
    keyboardType: 'default',
    maxLength: 100,
  },
  {
    id: 'state',
    label: 'UF',
    value: '',
    errorMessage: '',
    keyboardType: 'default',
    maxLength: 2,
  },
];

export default formState;
