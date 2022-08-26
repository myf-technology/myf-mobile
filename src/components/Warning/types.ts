import { fontType } from '../../constants/Typography';
import { iconNameProp } from '../Icon/types';

export interface warningProps {
  onCloseWarningPress: () => void;
  titleButtonSecundary?: string;
  titleButtonPrimary?: string;
  topIconType?: iconNameProp;
  buttonSecundary?: boolean;
  buttonPrimary?: boolean;
  Warging?: boolean;
  message?: string;
  title?: string;
}

export interface topIconTypeProps {
  topIconType?: string;
}

export interface textFieldProps {
  font?: fontType;
  text?: string;
}

export interface closeWarningProps {
  onPress?: () => void;
}

export interface buttonsProps {
  buttonPrimary?: boolean;
  buttonSecundary?: boolean;
  titleButtonPrimary?: string;
  titleButtonSecundary?: string;
  onButtonPrimaryPress?: () => void;
  onButtonSecundaryPress?: () => void;
}
