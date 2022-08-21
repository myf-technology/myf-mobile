import { View } from 'react-native';
import Colors, { colorTypes } from '../../../../constants/Colors';

interface WhiteLineProps {
  color?: colorTypes;
}

export const WhiteLine = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: 50,
        height: 2,
        position: 'absolute',
        top: 65,
        left: 4,
      }}
    />
  );
};
