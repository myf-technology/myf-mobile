import { storiesOf } from '@storybook/react-native';
import { FlipInputButton } from '.';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Components', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('Flip Input Button', () => <FlipInputButton />);