import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { IconButton } from '../../../../components/IconButton';
import { iconTypes } from '../../../../components/IconButton/types';
import styles from '../Styles';
import { IconButtons } from '../_helpers/IconButtons';
import navigationControl from '../_helpers/navigationControl';

export const MenuIconButton = () => {
  const { navigate } = useNavigation();
  const onPress = (key: iconTypes) => {
    navigationControl(key, navigate);
  };

  return (
    <View style={styles.iconButtonContainer}>
      {IconButtons.map(({ label, icon, textColor }) => (
        <IconButton
          onPress={() => onPress(icon)}
          key={icon}
          textColor={textColor}
          label={label}
          icon={icon}
        />
      ))}
    </View>
  );
};
