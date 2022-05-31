import { suffixType } from '../../../../components/ContainerButton/types';
import { iconNameProp } from '../../../../components/Icon/types';

export const ContainerButtons: {
  prefix: iconNameProp;
  suffix: suffixType;
  text: string;
}[] = [
  {
    prefix: 'Transfer',
    suffix: 'ArrowForward',
    text: 'Trasferencia para conta',
  },
  {
    prefix: 'QRcode',
    suffix: 'ArrowForward',
    text: 'Transferencia via pix',
  },
];
