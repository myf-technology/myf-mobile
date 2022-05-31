import BottomSheet from '@gorhom/bottom-sheet';
import { View } from 'react-native';

import Colors from '../../../constants/Colors';
import { height, width } from '../../../constants/responsive';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Input } from '../../Input';
import { Spacer } from '../../Spacer';
import { Text } from '../../Text';

export const BottomSheetTokenSMS = ({
  bottomSheetRef,
  onCloseModal,
  onPressConfirm,
  phoneNumber,
  onChangeText,
}) => (
  <BottomSheet
    enableContentPanningGesture={false}
    ref={bottomSheetRef}
    snapPoints={[1, height(95)]}
  >
    <View
      style={{
        alignSelf: 'center',
        width: width(90),
      }}
    >
      <Icon onPress={onCloseModal} name="ArrowDown" fill="white" />
      <Spacer amount={3} />

      <Text textAlign="left" font="title">
        Insira o código enviado via SMS para
      </Text>
      <Spacer amount={1} />
      <Text color={Colors.grey3} textAlign="left" font="callout">
        {phoneNumber}
      </Text>
      <Spacer amount={3} />
      <Input
        onChangeText={onChangeText}
        maxLength={6}
        label="Código enviado"
        placeholder="000000"
      />
      <Text>Você pode enviar novamente em 35 segundos...</Text>
      <Spacer amount={15} />
      <Button onPress={onPressConfirm} title="Confirmar" theme="dark" />
    </View>
  </BottomSheet>
);
