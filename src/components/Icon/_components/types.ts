import { SvgProps } from 'react-native-svg';

import { colorTypes } from '../../../constants/Colors';

export interface iconProps extends SvgProps {
  fill?: colorTypes;
}
