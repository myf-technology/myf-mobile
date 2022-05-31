import { suffixType } from '../../../../components/ContainerButton/types';
import { iconNameProp } from '../../../../components/Icon/types';

export const containerButtons: {
  text: string;
  suffix: suffixType;
  prefix: iconNameProp;
}[] = [
  {
    text: 'Meus dados cadastrais',
    suffix: 'ArrowDown',
    prefix: 'Person',
  },
  {
    text: 'Dados do documento',
    suffix: 'ArrowDown',
    prefix: 'CardId',
  },
];
