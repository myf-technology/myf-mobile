import { useState, useEffect } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import fontControl from './helpers/fontControl';
import { Iprops } from './types';

import Colors from '../../constants/Colors';
import { FontSize, Font } from '../../constants/Typography';

export const Text = ({
  textDecorationLine = 'none',
  textAlign = 'center',
  children,
  font = Font.callout,
  color = Colors.dark,
  testID,
  style,
  onMeasurement,
  ...rest
}: Iprops) => {
  const [defaultFont, setDefaultFont] = useState<TextStyle>(styles.title2);

  useEffect(
    () => setDefaultFont(fontControl(font, styles)),
    [setDefaultFont, font]
  );

  return (
    <Animated.Text
      testID={testID}
      onLayout={({ nativeEvent: { layout } }) => {
        onMeasurement && onMeasurement(layout);
      }}
      {...rest}
      style={[
        styles.baseText,
        defaultFont,
        { color, textAlign, textDecorationLine },
        style,
      ]}
    >
      {children}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'rubik-medium',
    color: Colors.dark,
    // width: '100%', // [TODO] remove it!
    textAlign: 'center',
  },
  title: {
    fontSize: FontSize.title,
    fontFamily: 'rubik-medium',
  },
  title2: {
    fontSize: FontSize.title2,
    fontFamily: 'rubik-bold',
  },
  title3: {
    fontSize: FontSize.title3,
    fontFamily: 'rubik-bold',
  },
  title4: {
    fontSize: FontSize.title4,
    fontFamily: 'rubik-bold',
  },
  body: {
    fontSize: FontSize.body,
    fontFamily: 'rubik-medium',
  },
  callout: {
    fontSize: FontSize.body,
  },
  subhead: {
    fontSize: FontSize.subhead,
    fontFamily: 'rubik-bold',
  },
  footnote: {
    fontSize: FontSize.subhead,
  },
});
