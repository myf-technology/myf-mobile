import { Platform } from 'react-native';

import { IosDatePicker } from './IosDatePicker';
import { IinputObject } from './IosDatePicker/components/IosDatePicker/types';
import { AndroidDatePicker } from './deprecated.AndroidDatePicker';

export const DatePicker = ({
  label,
  inputs,
  testID,
  ...rest
}: {
  label: string;
  inputs: IinputObject[];
  testID?: string;
}) =>
  Platform.OS === 'android' ? (
    <AndroidDatePicker
      testID={testID ? testID : 'android-datepicker'}
      {...{ inputs, label, ...rest }}
    />
  ) : (
    <IosDatePicker
      testID={testID ? testID : 'ios-datepicker'}
      label={label}
      inputs={inputs}
      {...rest}
    />
  );
