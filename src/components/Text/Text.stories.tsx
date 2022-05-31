import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CenterView from '../../../storybook/stories/CenterView';
import Colors from '../../constants/Colors';
import { Font } from '../../constants/Typography';

import { Text } from '.';

storiesOf('Components', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('Text', () => (
    <Text
      textAlign={select(
        'Text Alignment',
        ['center', 'left', 'right', 'auto', 'justify'],
        'center'
      )}
      color={select(
        'color',
        [
          Colors.dark,
          Colors.green,
          Colors.grey,
          Colors.grey2,
          Colors.grey3,
          Colors.red,
          Colors.white,
          Colors.white2,
          Colors.yellow,
        ],
        Colors.dark
      )}
      font={select(
        'Font',
        [
          Font.body,
          Font.callout,
          Font.footnote,
          Font.subhead,
          Font.title2,
          Font.title3,
        ],
        Font.body
      )}
    >
      {text('Text', 'Text component')}
    </Text>
  ));
