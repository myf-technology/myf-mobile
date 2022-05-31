import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../../../storybook/stories/CenterView';

import { CameraButton } from '.';

storiesOf('Components', module)
  .addDecorator((Story) => <CenterView>{Story()}</CenterView>)
  .add('CameraButton', () => (
    <CameraButton onPress={action('button onPress')} />
  ));
