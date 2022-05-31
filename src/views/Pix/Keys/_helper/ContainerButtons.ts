import { suffixType } from '../../../../components/ContainerButton/types';
import { iconNameProp } from '../../../../components/Icon/types';

export const ContainerButtons: {
  prefix: iconNameProp;
  suffix: suffixType;
  title: string;
  text: string;
}[] = [
  {
    prefix: 'Shuffle',
    suffix: 'PlusSign',
    title: 'Chave Aleatória',
    text: '',
  },
  {
    prefix: 'Mobile',
    suffix: 'PlusSign',
    title: 'Celular',
    text: '',
  },
  {
    prefix: 'CardId',
    suffix: 'Import',
    title: 'CPF',
    text: '365.555.485.65',
  },
  {
    prefix: 'Mail',
    suffix: 'Import',
    title: 'Email',
    text: 'seuemail@email.com',
  },
];
