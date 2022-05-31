import { forwardRef, LegacyRef } from 'react';
import { View } from 'react-native';

import WithModalBehaviour from './_hoc/WithModalBehaviour';
import styles from './styles';
import { Iprops } from './types';

export const Modal = forwardRef(
  (
    { children, enabledContentGestureInteraction, snapPoints = [0] }: Iprops,
    ref: LegacyRef<WithModalBehaviour> | undefined
  ) => (
    <WithModalBehaviour
      ref={ref}
      renderHeader={() => (
        <View style={styles.modalHead}>
          <View style={styles.indicator} />
        </View>
      )}
      // enabledInnerScrolling={false}
      {...{
        enabledContentGestureInteraction,
        snapPoints,
      }}
    >
      <View style={styles.modalContent}>{children}</View>
    </WithModalBehaviour>
  )
);
