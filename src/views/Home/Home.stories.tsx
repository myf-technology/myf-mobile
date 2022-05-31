import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Home } from "../Home/index"

storiesOf('Views', module)
  .addDecorator((getStory: any) => getStory())
  .add('Home', () => (<Home />))
