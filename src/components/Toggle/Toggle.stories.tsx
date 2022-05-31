import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CenterView from '../../../storybook/stories/CenterView';

import { Toggle } from '.';

storiesOf('Components', module)
  .addDecorator((story) => <CenterView>{story()}</CenterView>)

  .add('Toggle', () => (
    <Toggle
      onPress={action('toggle: onPress')}
      on={boolean('On', false)}
      text={text('Text', 'Toggle component')}
    />
  ));
