import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import CenterView from '../../../../storybook/stories/CenterView';
import { height } from '../../../constants/responsive';

import { BaseBalance } from '.';

storiesOf('Components', module)
  .addDecorator((getStory: any) => (
    <CenterView>
      <View style={{ backgroundColor: 'black' }}>{getStory()}</View>
    </CenterView>
  ))
  .add('BaseBalance', () => <BaseBalance />);
