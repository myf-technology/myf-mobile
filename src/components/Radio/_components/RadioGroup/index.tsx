import { useState } from 'react';
import { View } from 'react-native';

import { Iprops } from './types';

import { Radio } from '../..';

export const RadioGroup = ({ data = [], onCheck }: Iprops) => {
  const [checked, setChecked] = useState<null | number>(null);

  if (data.length === 0) return null;

  return (
    <View>
      {data?.map(({ text }, index) => (
        <Radio
          checked={index === checked}
          onPress={() => {
            onCheck && onCheck(index);
            setChecked(index);
          }}
          key={text}
          text={text}
        />
      ))}
    </View>
  );
};
