import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Address } from '.';

storiesOf('Views', module)
  .addDecorator((getStory: any) => getStory())
  .add('Address', () => <Address />);
