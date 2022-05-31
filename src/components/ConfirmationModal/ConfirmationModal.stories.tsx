import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CenterView from '../../../storybook/stories/CenterView';

import { ConfirmationModal } from '.';

storiesOf('Components', module)
  .addDecorator((story) => <CenterView>{story()}</CenterView>)

  .add('ConfirmationModal', () => (
    <ConfirmationModal showModal={boolean('Show Modal', true)} />
  ));
