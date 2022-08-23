import { Text as RNText } from 'react-native';
import { ITextProps } from './types';
import styles from './styles';
import { Colors } from '../../constants';
import { TextTestIds } from '../../enums';

export const Text = ({
  children,
  typography = 'caption',
  color = 'white',
  ...rest
}: ITextProps) => {
  return (
    <RNText
      testID={TextTestIds.Text}
      {...rest}
      style={[
        rest.style,
        styles.baseText,
        { color: Colors[color] },
        styles[typography as keyof typeof styles],
      ]}>
      {children}
    </RNText>
  );
};
