import { storiesOf } from '@storybook/react-native';
import { Text, View } from 'react-native';

import { Modal } from '.';

storiesOf('Components', module).add('Modal', () => (
  <Modal snapPoints={[500, 300, 200]}>
    <View>
      <Text>Modal Example</Text>
    </View>
  </Modal>
));
