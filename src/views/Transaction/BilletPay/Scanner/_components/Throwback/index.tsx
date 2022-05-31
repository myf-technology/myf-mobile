import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from '../../../../../../components/Icon';
import Colors from '../../../../../../constants/Colors';
import { width } from '../../../../../../constants/responsive';

export const Throwback = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.grey,
        width: width(6.5),
        height: width(6.5),
        borderRadius: width(100),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: width(20),
        top: width(10),
      }}
      onPress={async () => {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );

        setTimeout(() => {
          goBack();
        }, 500);
      }}
    >
      <Icon fill="white" name="ArrowBack" />
    </TouchableOpacity>
  );
};
