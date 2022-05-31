import { suffixType } from '../../../components/ContainerButton/types';
import { iconNameProp } from '../../../components/Icon/types';

export const containerButtons: {
  text: string;
  prefix: iconNameProp;
  suffix: suffixType;
}[] = [
  {
    prefix: 'QRcode',
    suffix: 'ArrowForward',
    text: 'Ler Qr code',
  },
  {
    prefix: 'Pix',
    suffix: 'ArrowForward',
    text: 'Pix copia e cola',
  },
];
