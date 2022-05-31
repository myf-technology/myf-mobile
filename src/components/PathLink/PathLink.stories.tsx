import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CenterView from '../../../storybook/stories/CenterView';

import { PathLink } from '.';

storiesOf('Components', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('PathLink', () => (
    <PathLink destination={''}>{text('Link', 'Name your link')}</PathLink>
  ));
