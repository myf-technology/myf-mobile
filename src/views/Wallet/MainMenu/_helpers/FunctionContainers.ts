import { suffixType } from '../../../../components/ContainerButton/types';
import { iconNameProp } from '../../../../components/Icon/types';

export const FunctionContainers: {
  prefix: iconNameProp;
  suffix: suffixType;
  titleText: string;
  text: string;
}[] = [
    {
      prefix: 'Penny',
      suffix: 'ArrowForward',
      titleText: 'Movimentação',
      text: '',
    },
    {
      prefix: 'DollarSign',
      suffix: 'Toggle',
      titleText: 'Usar saldo ao pagar',
      text: 'Saldo disponível R$ 0,00',
    },
  ];
