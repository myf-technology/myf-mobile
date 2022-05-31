import { storiesOf } from '@storybook/react-native';

import { Document } from '.';

storiesOf('Views', module)
  .addDecorator((getStory: any) => getStory())
  .add('Document', () => <Document />);
