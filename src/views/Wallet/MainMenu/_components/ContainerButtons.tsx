import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { IconButton } from '../../../../components/IconButton';
import { Text } from '../../../../components/Text';
import { width } from '../../../../constants/responsive';
import styles from '../Styles';

export const ContainerButtons = ({ date, cost, brand, category }) => (
  <TouchableOpacity>
    <View style={styles.buttonsBox}>
      <IconButton small={true} icon="Store" />
      <View>
        <View style={styles.buttonsBrandText}>
          <Text textAlign="left">{category}</Text>
          <Text textAlign="left" font="subhead">
            {brand}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          marginLeft: width(30),
        }}
      >
        <View style={styles.buttonsValueText}>
          <Text textAlign="left" font="subhead">
            R$: {cost}
          </Text>
          <Text textAlign="right">{date}</Text>
        </View>
        <View style={{ marginLeft: width(4) }}>
          <Icon name="ArrowForward" />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
