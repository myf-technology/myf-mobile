import { storiesOf } from '@storybook/react-native';

import CenterView from '../../../../../../storybook/stories/CenterView';

import { OpenButton } from '.';

storiesOf('Components', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('OpenButton', () => <OpenButton></OpenButton>);
