import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../components/Button';
import { Icon } from '../../../../components/Icon';
import { Input } from '../../../../components/Input';
import { Spacer } from '../../../../components/Spacer';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { updateBarCode } from '../../../../store/reducers/payment/actions';

export const ManuallyType = () => {
  const { navigate } = useNavigation();
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const [barcode, setBarcode] = useState<null | string>(null);
  const {
    controls: { status },
  } = useSelector(({ payment }) => payment);

  const onPress = () => {
    dispatch(updateBarCode(barcode, navigate));
    setIsDisabled(false);
  };

  const onBlur = () => {
    setIsDisabled(true);
  };

  const onChangeText = (value: string) => {
    setBarcode(value);
  };
  const { goBack } = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: Layout.paddingHorizontal,
        backgroundColor: Colors.white,
      }}
    >
      <TouchableOpacity
        style={{ height: 40, width: 40 }}
        onPress={async () => {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
          );

          setTimeout(() => {
            goBack();
          }, 500);
        }}
      >
        <Icon
          name="ArrowBack"
          height={Layout.window.height * 0.02}
          width={Layout.window.width * 0.024}
          style={{ justifyContent: 'center' }}
          fill="dark"
        />
      </TouchableOpacity>
      <Input
        {...{ onChangeText, onBlur }}
        keyboardType="numeric"
        label="Código de barras"
      />
      <Input onBlur={onBlur} label="Descrição (opcional)" />
      <Spacer amount={30} />
      <Button
        onPress={onPress}
        theme={status === 'LOADING' ? 'disabled' : 'dark'}
        disabled={status === 'LOADING'}
        loading={status === 'LOADING'}
        title="Continuar"
      />
    </SafeAreaView>
  );
};
