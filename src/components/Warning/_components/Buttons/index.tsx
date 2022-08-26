import { View } from 'react-native';

import { Button } from '../../../Button';
import styles from '../../styles';
import { buttonsProps } from '../../types';

export const Buttons = ({
  buttonPrimary,
  buttonSecundary,
  titleButtonPrimary = 'Cancelar',
  titleButtonSecundary = 'Confirmar',
  onButtonPrimaryPress,
  onButtonSecundaryPress,
}: buttonsProps) => (
  <View>
    {buttonPrimary || buttonSecundary ? (
      <View
        style={
          (styles.buttons,
          {
            ...styles.buttons,
            justifyContent:
              buttonPrimary && buttonSecundary ? 'space-between' : 'center',
          })
        }>
        {buttonPrimary ? (
          <Button onPress={onButtonPrimaryPress} title={titleButtonPrimary} />
        ) : null}

        {buttonSecundary ? (
          <Button
            onPress={onButtonSecundaryPress}
            freeWidth
            title={titleButtonSecundary}
          />
        ) : null}
      </View>
    ) : null}
  </View>
);
