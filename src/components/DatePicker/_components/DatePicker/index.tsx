import DateTimePicker from '@react-native-community/datetimepicker';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';

import { formatDate, normalizeDate } from './_helpers/formatDate';
import { DatePickerProps, enumReturnKeyType } from './types';

import { Text } from '../../../Text';

export const DatePicker = ({
  onChange,
  open = false,
  returnKeyType = 'done',
  onSubmitEditing,
}: DatePickerProps) => {
  const platform = Platform.OS;
  const [date, setDate] = useState<any>(new Date());

  // todo: change to Date instead of 'any'
  const changeHandler = (_: any, timestamp: any) => {
    if (timestamp) {
      setDate(timestamp);
      const normalizedDate = normalizeDate(timestamp);
      const formattedDate = formatDate(timestamp);

      onChange && onChange(formattedDate, normalizedDate);
    }
  };

  return open ? (
    <Animated.View entering={SlideInDown} exiting={SlideOutDown}>
      <BlurView
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: 1000,
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
          {platform === 'ios' && (
            <Text textAlign="right" font="body">
              {enumReturnKeyType[returnKeyType]}
            </Text>
          )}
        </TouchableOpacity>
        <DateTimePicker
          mode="date"
          maximumDate={new Date()}
          minimumDate={new Date(1900, 1, 1)}
          value={date}
          display={platform === 'ios' ? 'spinner' : 'calendar'}
          onChange={changeHandler}
        />
      </BlurView>
    </Animated.View>
  ) : null;
};
