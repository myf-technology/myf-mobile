import React from 'react';
import { View } from 'react-native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';

import { AppVersion } from './Components/AppVersion';
import { BankData } from './Components/BankData';
import { Initials } from './Components/Initials';
import { Option } from './Components/Option';
import { Throwback } from './Components/Throwback';
import styles from './Styles';
import { option } from './_helpers/types';

import { Spacer } from '../../../components/Spacer';
import { width } from '../../../constants/responsive';

export const Profile = () => (
  <View style={styles.backgroundView}>
    <Throwback />
    <Spacer amount={8} />
    <Initials initial="DZ">Daniel</Initials>
    <Spacer amount={3} />
    <BankData />
    <Spacer amount={4} />

    {option.map(({ name, text }) => (
      <View
        style={{
          width: width(90),
        }}
        key={text}
      >
        <Spacer amount={2} />
        <Option name={name}>{text}</Option>
      </View>
    ))}
    <AppVersion />
  </View>
);
