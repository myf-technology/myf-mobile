import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import { width } from '../../../../constants/responsive';
import styles from '../Styles';
import { navigationControl } from '../_helpers/navigationControl';

export const Option = (props: any) => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigationControl(props.name, navigate);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.options}>
        <Spacer amount={5} />
        <Icon name={props.name} fill="white" />
        <View style={{ marginLeft: width(4) }}>
          <Text font="subhead" color={Colors.grey4} textAlign="left">
            {props.children}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
