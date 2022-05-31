import { StyleSheet, View } from 'react-native';
import Animated, { SlideInDown, SlideOutUp } from 'react-native-reanimated';

import { Iprops } from './types';

import Colors from '../../constants/Colors';
import { Button } from '../Button';
import { Text } from '../Text';

export const ConfirmationModal = ({
  showModal,
  onConfirm,
  onCancel,
  loading,
  testID,
}: Iprops) =>
  showModal ? (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutUp}
      testID={testID}
      style={styles.container}
    >
      <View style={{ marginBottom: '9%' }}>
        <Text color={Colors.white} font="callout">
          {loading ? 'Carregando...' : 'A foto ficou boa?'}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Button
          testID="cancel-button"
          title="Cancelar"
          theme="transparent"
          small
          onPress={onCancel}
        />
        <Button
          testID="confirm-button"
          title="Continuar"
          theme={loading ? 'disabled' : 'yellow'}
          small
          onPress={onConfirm}
          disabled={loading ? true : false}
        />
      </View>
    </Animated.View>
  ) : null;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey2,
    justifyContent: 'center',
    width: '100%',
    height: 150,
    bottom: 0,
    position: 'absolute',
  },
});
