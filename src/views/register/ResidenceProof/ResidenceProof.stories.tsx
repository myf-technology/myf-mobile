import { storiesOf } from '@storybook/react-native';

import { ResidenceProof } from '.';

storiesOf('Views/Register', module)
  .addDecorator((getStory: any) => getStory())
  .add('ResidenceProof', () => <ResidenceProof />);
