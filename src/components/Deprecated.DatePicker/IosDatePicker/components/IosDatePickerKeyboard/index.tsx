import DateTimePicker from '@react-native-community/datetimepicker';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';

import { enumReturnKeyType, Iprops } from './types';

import { Text } from '../../../../Text';
import { normalizeDate } from '../../helpers/formatDate';

export const IosDatePickerKeyboard = ({
  returnKeyType = 'done',
  onSubmitEditing,
  getDate,
  display = 'none',
}: Iprops) => {
  const [date, setDate] = useState<Date>(new Date());

  return display === 'flex' ? (
    <Animated.View entering={SlideInDown} exiting={SlideOutDown}>
      <BlurView
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}
        intensity={80}
        tint="light"
      >
        <TouchableOpacity
          onPress={onSubmitEditing}
          style={{
            width: '100%',
            justifyContent: 'flex-end',
            paddingRight: 20,
          }}
        >
          <Text textAlign="right" font="body">
            {enumReturnKeyType[returnKeyType]}
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          onChange={(_: any, dateValue: any) => {
            getDate && getDate(normalizeDate(dateValue));
            setDate(dateValue);
          }}
          display="spinner"
          value={date}
          mode="date"
          themeVariant="light"
        />
      </BlurView>
    </Animated.View>
  ) : null;
};
