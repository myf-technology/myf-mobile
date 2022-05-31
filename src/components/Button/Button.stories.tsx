import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Theme } from './types';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

import { Button } from '.';

storiesOf('Components', module)
  .addDecorator((getStory: any) => (
    <View
      style={{
        paddingHorizontal: Layout.paddingHorizontal,
        backgroundColor:
          getStory()?.props?.theme === 'transparent'
            ? Colors.dark
            : Colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {getStory()}
    </View>
  ))
  .add('Button', () => (
    <Button
      title={text('Text', 'Button Text')}
      onPress={action('button onPress')}
      theme={select(
        'theme',
        [Theme.dark, Theme.transparent, Theme.yellow],
        Theme.dark
      )}
      small={boolean('small', false)}
    />
  ));
