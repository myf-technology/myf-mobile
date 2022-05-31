import { suffixType } from '../../../../components/ContainerButton/types';
import { iconNameProp } from '../../../../components/Icon/types';

export const containerButtons: {
  prefix: iconNameProp;
  suffix: suffixType;
  title: string;
  content: string;
}[] = [
    {
      prefix: 'Calendar',
      suffix: 'ArrowForward',
      title: 'Parcelas 6x',
      content: '',
    },
    {
      prefix: 'CreditCard',
      suffix: 'ArrowForward',
      title: 'Forma de pagamento',
      content: 'Cartão final 3018',
    },
  ];
