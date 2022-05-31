import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { DynamicIcon } from './_helpers/DynamicIcon';
import styles from './styles';
import { Iprops } from './types';

import Colors from '../../constants/Colors';
import { width } from '../../constants/responsive';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

export const IconButton = ({
  onPress,
  squared,
  icon,
  textColor,
  label,
  small = false,
  disabled = false,
}: Iprops) => {
  const fill = textColor;

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={[
          styles.masterView,
          !squared && {
            width: !small ? width(17) : undefined,
            padding: 0,
          },
        ]}
      >
        <View
          style={[
            squared
              ? styles.square
              : small
              ? styles.circleSmall
              : styles.circle,
          ]}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <DynamicIcon height={small ? 15 : 25} {...{ icon }} />
            {squared ? <Text>{label}</Text> : null}
          </View>
        </View>

        {squared || small ? null : (
          <>
            <Spacer amount={1} />
            <View style={{ width: width(25) }}>
              <Text color={Colors[fill]}>{label}</Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
