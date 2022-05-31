import { ReactNode } from 'react';

import { colorTypes } from '../../constants/Colors';
import { iconProps } from '../Icon/_components/types';
import { iconNameProp } from '../Icon/types';

export type suffixType =
  | 'ArrowForward'
  | 'ArrowDown'
  | 'ArrowUp'
  | 'Toggle'
  | 'Check'
  | 'Import'
  | 'PlusSign'
  | undefined;
export interface Iprops extends iconProps {
  activeOpacity?: number;
  onPress(): void;
  prefix: iconNameProp;
  backgroundColor?: colorTypes;
  on?: boolean;
  suffix: suffixType;
  toggleHandler?(): void;
  children: ReactNode;
}
