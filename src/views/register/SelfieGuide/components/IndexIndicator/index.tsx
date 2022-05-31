import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import makeStyles from './styles';
import { Iprops } from './types';

export const IndexIndicator = ({ colorIndex }: Iprops) => {
  const styles = makeStyles(colorIndex);

  return (
    <View style={styles.container}>
      <Animated.View testID="first-circle" style={styles.firstCircle} />
      <Animated.View testID="second-circle" style={styles.secondCircle} />
    </View>
  );
};
