import { storiesOf } from '@storybook/react-native';

import { Email } from '.';

storiesOf('Views', module)
  .addDecorator((getStory: any) => getStory())
  .add('Email', () => <Email />);
