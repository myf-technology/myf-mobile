import { useState } from 'react';
import { View } from 'react-native';

import { Buttons } from './_components/Buttons';
import { CloseWarning } from './_components/CloseWarning';
import { TextField } from './_components/TextField';
import { TopIconType } from './_components/TopIconType';
import styles from './styles';
import { warningProps } from './types';
import { Icon } from 'react-native-eva-icons';
import { Colors } from '../../constants';

export const Warning = ({
  title = 'title',
  message = 'message',
  buttonPrimary = true,
  buttonSecundary = true,
  titleButtonPrimary = 'Cancel',
  titleButtonSecundary = 'Confirmar',
  topIconType = 'alert-triangle-outline',
  onCloseWarningPress,
}: warningProps) => {
  return (
    <>
      <View style={styles.transparenceBackground}>
        <View style={styles.warningContainer}>
          <View style={styles.icons}>
            <TopIconType topIconType={topIconType} />
            <CloseWarning onPress={onCloseWarningPress} />
          </View>

          <TextField text={title} font="subhead" />
          <TextField text={message} />

          <Buttons
            buttonPrimary={buttonPrimary}
            buttonSecundary={buttonSecundary}
            titleButtonPrimary={titleButtonPrimary}
            titleButtonSecundary={titleButtonSecundary}
          />
        </View>
      </View>
    </>
  );
};
