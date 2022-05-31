import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { CircleIcon } from './_components/CircleIcon';
import { ActionConfirm } from './_helpers/ActionConfirm';
import styles from './styles';
import { Iprops } from './types';

import Colors from '../../constants/Colors';

export const ContainerButton = ({
  prefix,
  onPress,
  on,
  suffix,
  toggleHandler,
  children,
  activeOpacity,
  backgroundColor = 'grey4',
  ...iconProps
}: Iprops) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={activeOpacity}
    style={styles.touchable}
    disabled={suffix === 'Toggle'}
  >
    <View
      style={[styles.container, { backgroundColor: Colors[backgroundColor] }]}
    >
      <View style={styles.prefix}>
        {prefix ? <CircleIcon {...{ prefix, ...iconProps }} /> : <View />}

        <View style={styles.children}>{children}</View>
      </View>

      <ActionConfirm on={on} onPress={toggleHandler} suffix={suffix} />
    </View>
  </TouchableOpacity>
);
