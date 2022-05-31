import { suffixType } from '../../../../components/ContainerButton/types';
import { iconNameProp } from '../../../../components/Icon/types';

export const CardContainers: {
  prefix: iconNameProp;
  suffix: suffixType;
  titleText: string;
  text: string;
}[] = [
  {
    prefix: 'Plus',
    suffix: '',
    titleText: 'Adicionar cartão de crédito',
    text: '',
  },
  {
    prefix: 'CardId',
    suffix: 'Check',
    titleText: 'Forma de pagamento',
    text: 'Cartão final 3018',
  },
];
