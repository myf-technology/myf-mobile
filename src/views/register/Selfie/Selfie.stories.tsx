import { storiesOf } from '@storybook/react-native';

import { Selfie } from '.';

storiesOf('Views', module)
  .addDecorator((getStory: any) => getStory())
  .add('Selfie', () => <Selfie />);
