/* eslint-disable react-native/no-inline-styles */
import { createRef } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Colors, width } from '../../constants';
import { Button } from '../Button';

import { Spacer } from '../Spacer';
import { Text } from '../Text';

import styles from './styles';

interface warningProps {
  cancelBotton?: () => void;
  ConfirmButton?: () => void;
}

export const Warning = ({
  cancelBotton = true,
  ConfirmButton = true,
  icon = true,
}) => {
  const shakeIconRef: React.RefObject<Icon> = createRef();

  const onShakeIconPress = (): void => {
    shakeIconRef.current.startAnimation();
  };

  return (
    <View style={styles.transparenceBackground}>
      <View style={styles.warningContainer}>
        <Spacer amount={2} />
        <View
          style={{
            flexDirection: 'row',
            width: width(75),
            justifyContent: 'flex-end',
          }}>
          {icon ? (
            <Icon
              ref={shakeIconRef}
              animation="shake"
              style={{ marginRight: width(30) }}
              name="alert-triangle-outline"
              fill={Colors.yellow}
              height={22}
              width={22}
              onPress={onShakeIconPress}
            />
          ) : null}
          <Icon
            name="close-outline"
            fill={Colors.black}
            width={22}
            height={22}
          />
        </View>
        <Spacer amount={4} />
        <View style={styles.textWidthAdjust}>
          <Text>
            O PIX é uma forma gratuita de pagamento instantâneo que permite
            enviar e receber dinheiro de qualquer conta bancária ou digital em
            segundos, qualquer dia e horário,
          </Text>
          <Spacer amount={6} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {cancelBotton ? (
              <View style={{ margin: width(5) }}>
                <Button onPress={() => console.log('oi')} title="Cancelar" />
              </View>
            ) : null}
            {ConfirmButton ? (
              <View style={{ margin: width(5) }}>
                <Button onPress={() => console.log('oi')} title="Confirmar" />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
};
