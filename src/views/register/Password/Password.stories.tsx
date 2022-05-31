import { storiesOf } from '@storybook/react-native';

import { Password } from '.';

storiesOf('Views', module)
  .addDecorator((getStory: any) => getStory())
  .add('Password', () => <Password />);
