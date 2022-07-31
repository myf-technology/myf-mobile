import { View } from 'react-native';
import Colors from '../../../../constants/Colors';

export const WhiteLine = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.yellow4,
        width: 50,
        height: 2,
        position: 'absolute',
        top: 65,
        left: 4
      }}
    ></View>
  );
};
