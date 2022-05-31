import { storiesOf } from '@storybook/react-native';

import CenterView from '../../../storybook/stories/CenterView';
import { Text } from '../Text';

import { ContainerButton } from '.';

storiesOf('Components', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('ContainerButton', () => (
    <ContainerButton
      onPress={() => ''}
      prefix="AnalyticGraphic"
      suffix="ArrowForward"
    >
      <Text>text</Text>
    </ContainerButton>
  ));
