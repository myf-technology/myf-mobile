import { createRef, useRef } from 'react';
import { View } from 'react-native';

import { Iprops } from './types';

import { height } from '../../../constants/responsive';
import { Input } from '../../Input';
import { Text } from '../../Text';

export const AndroidDatePicker = ({
  label,
  inputs,
  testID,
  onChangeText,
  onSubmitEditing,
  onBlur,
}: Iprops) => {
  const elRefs: any = useRef([]);

  // [TODO]: refactor!
  if (elRefs.current.length !== inputs?.length) {
    elRefs.current = Array(inputs?.length)
      .fill(0)
      .map((_, i) => elRefs.current[i] || createRef());
  }

  // [TODO]: make a mask that actually works for day mask.
  // const dayMask = [/[0-31]/, /[0-31]/];
  const monthMask = [/[0-1]/, /[0-2]/];
  const yearMask = [/[1-2]/, /[0-9]/, /[0-9]/, /[0-9]/];

  return (
    <View testID={testID}>
      <Text testID="label-android-datepicker" textAlign="left" font="callout">
        {label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: height(10),
        }}
      >
        {inputs?.map(({ key, placeholder, value }, index) => (
          <View key={key} style={{ width: '30%' }}>
            <Input
              onBlur={() => {
                inputs.length - 1 === index && onBlur && onBlur();
              }}
              testID="android-datepicker-input"
              refs={elRefs.current[index]}
              value={value}
              numberOfLines={3}
              mask={
                index === 0 ? undefined : index === 1 ? monthMask : yearMask
              }
              placeholderAlign="center"
              maxLength={index === 2 ? 4 : 2}
              returnKeyType={inputs.length - 1 === index ? 'done' : 'next'}
              keyboardType="number-pad"
              onChangeText={(text: string) =>
                onChangeText && onChangeText(text, index)
              }
              onSubmitEditing={() => {
                index === 2 && onSubmitEditing && onSubmitEditing();
                elRefs?.current[index + 1]?.current?.focus();
              }}
              placeholder={placeholder}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
