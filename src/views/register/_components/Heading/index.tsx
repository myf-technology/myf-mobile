import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

import { Iprops } from './types';

import { Icon } from '../../../../components/Icon';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { height, width } from '../../../../constants/responsive';

export const Heading = ({ testID, label, align = 'left' }: Iprops) => {
  const { goBack } = useNavigation();

  return (
    <View
      testID={testID}
      style={{
        paddingHorizontal: Layout.paddingHorizontal,
      }}
    >
      <Spacer amount={8} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: height(1),
            left: width(4),
          }}
          onPress={() => goBack()}
        >
          <Icon name="ArrowBack" fill="white" testID="heading-arrow-back" />
        </TouchableOpacity>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
          }}
        >
          <Text
            testID="heading-title"
            textAlign={align}
            font="callout"
            color={Colors.white}
          >
            {label}
          </Text>
        </View>
      </View>
    </View>
  );
};
