import { storiesOf } from '@storybook/react-native';

import CenterView from '../../../../storybook/stories/CenterView';

import { AndroidDatePicker } from '.';

storiesOf('Components', module)
  .addDecorator((Story) => <CenterView>{Story()}</CenterView>)
  .add('AndroidDatePicker', () => <AndroidDatePicker />);
