import { suffixType } from '../../../components/ContainerButton/types';
import { iconNameProp } from '../../../components/Icon/types';
import { iconTypes } from '../../../components/IconButton/types';

export type iconButtonsProps = Array<{
  label: string;
  icon: iconTypes;
}>;

export type containerButtonsProps = {
  key: containerButtonsKeys;
  text: string;
  prefix: iconNameProp;
  suffix: suffixType;
}[];

export type containerButtonsKeys = 'PIX_KEY_READ' | 'PIX_LIMIT_READ';

export type iconButtonsKeys = 'PIX_PAY_READ' | 'PIX_TRANSFER' | 'RECEIVE_VIEW';
