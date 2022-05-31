import { iconNameProp } from '../../../../components/Icon/types';
import { iconButtonsProps } from '../types';

export const iconButtons: {
  key: iconButtonsProps;
  label: string;
  icon: iconNameProp;
}[] = [
  {
    key: 'PIX_PAY_READ',
    label: 'Pagar',
    icon: 'dollarsign',
  },
  {
    key: 'PIX_TRANSFER',
    label: 'Transferir',
    icon: 'transfer',
  },
  {
    key: 'RECEIVE_VIEW',
    label: 'Receber',
    icon: 'handshake',
  },
];
