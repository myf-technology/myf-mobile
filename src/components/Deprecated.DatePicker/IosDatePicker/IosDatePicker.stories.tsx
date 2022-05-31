import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { IosDatePickerKeyboard } from './components/IosDatePickerKeyboard';

import Layout from '../../../constants/Layout';

import { IosDatePicker } from '.';

const inputs = [
  { value: '01', placeholder: 'Dia' },
  { value: '12', placeholder: 'Mês' },
  { value: '2020', placeholder: 'Ano' },
];

storiesOf('Components', module).add('IosDatePicker', () => (
  <>
    <View
      style={{
        paddingHorizontal: Layout.paddingHorizontal,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <IosDatePicker label="Data de Nascimento" inputs={inputs} />
    </View>
    <IosDatePickerKeyboard
      display={select('Display', ['flex', 'none'], 'none')}
      returnKeyType="done"
    />
  </>
));
