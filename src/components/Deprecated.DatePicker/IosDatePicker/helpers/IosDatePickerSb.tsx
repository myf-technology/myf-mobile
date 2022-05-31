import { useState } from 'react';
import { View } from 'react-native';

import { dateFormatType, formatDate } from './formatDate';

import { IosDatePicker } from '../components/IosDatePicker';
import { IosDatePickerKeyboard } from '../components/IosDatePickerKeyboard';

export const IosDatePickerSb = () => {
  const [display, setDisplay] = useState<'flex' | 'none'>('none');
  const [date, setDate] = useState<dateFormatType>(null);

  const openKeyboard = () => {
    setDisplay('flex');
  };
  const onSubmitEditing = () => {
    setDisplay('none');
  };

  const label = 'Data de nascimento';
  const inputs = [
    {
      value: date?.day,
      placeholder: 'Dia',
      onPress: openKeyboard,
    },
    {
      value: date?.month,
      placeholder: 'Mês',
      onPress: openKeyboard,
    },
    {
      value: date?.day,
      placeholder: 'Ano',
      onPress: openKeyboard,
    },
  ];

  return (
    <View>
      <IosDatePicker {...{ label, inputs }} />
      <IosDatePickerKeyboard
        getDate={(dateValue) => setDate(formatDate(dateValue))}
        {...{ display, onSubmitEditing }}
        returnKeyType="done"
      />
    </View>
  );
};
