import { View } from 'react-native';

interface WhiteLineProps {
  // color?: colorTypes;
}

export const WhiteLine = ({ color = 'white' }: WhiteLineProps) => {
  return (
    <View
      style={{
        backgroundColor: Colors[color],
        width: 50,
        height: 2,
        position: 'absolute',
        top: 65,
        left: 4,
      }}
    />
  );
};
