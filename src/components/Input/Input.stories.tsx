import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import CenterView from '../../../storybook/stories/CenterView';

import { Input } from '.';

storiesOf('Components', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('Input', () => (
    <View style={{ width: '100%' }}>
      <Input
        placeholderAlign={select(
          'Placeholder Alignment',
          ['center', 'left', 'right', 'auto', 'justify'],
          'left'
        )}
        onChangeText={action('input onChangeText')}
        errorMessage={text('Error Message', '')}
        successValidation={boolean('Success Validation', false)}
        label={text('Label', 'Input label')}
        validateAsync={boolean('Validate Async', false)}
        passwordMode={boolean('Password Mode', true)}
        toggleVisibility={action('toggle visibility')}
      />
    </View>
  ));
