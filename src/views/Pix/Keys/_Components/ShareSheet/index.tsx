import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import styles from './styles';

import { BottomSheet } from '../../../../../components/BottomSheet';
import { height } from '../../../../../constants/responsive';
import { Contents } from '../Contents';

export const ShareSheet = ({ showUp }) => {
  const [content, setContent] = useState('');
  const [textValue, setTextValue] = useState('');

  return (
    <GestureHandlerRootView
      style={[
        styles.s,
        {
          // zIndex: 2,
          height: height(showUp ? 100 : 65),
          marginTop: height(showUp ? 0 : 100),
          backgroundColor: showUp ? 'rgba(0,0,0,0.5)' : 'transparent',
        },
      ]}
    >
      <BottomSheet
        onClose={() => setShowUp(false)}
        enablePanDownToClose={showUp ? true : false}
        snapPoints={[showUp ? height(35) : 1]}
      >
        <Contents title={content} text={textValue} />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
