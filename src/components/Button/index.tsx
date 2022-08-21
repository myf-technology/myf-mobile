import { View } from 'react-native';

import styles from './styles';
import { IButtonProps } from './types';

import { Text } from '..';
import { RectButton } from 'react-native-gesture-handler';

export const Button = ({
  theme = 'default',
  title,
  suffixIcon,
  ...rest
}: IButtonProps) => {
  return (
    <RectButton
      rippleColor="rgba(255, 255, 255, 0.1)"
      activeOpacity={0.6}
      style={[
        styles.baseButton,
        styles[theme],
        rest.enabled || styles.disabled,
      ]}
      {...rest}>
      <View style={styles.titleContainer}>
        <Text
          color="white"
          style={rest.enabled ? undefined : styles.textDisabled}>
          {title}
        </Text>
        {suffixIcon && suffixIcon()}
      </View>
    </RectButton>
  );
};
