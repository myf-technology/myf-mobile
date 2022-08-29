/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import { width, height } from '../../../../constants';
import styles from './styles';

import { Icon } from '../../../Icon';
import { ILayoutProps } from './types';

export const Layout = ({
  children,
  style,
  customArrowBackHandler,
}: ILayoutProps) => {
  // const {goBack} = useNavigation();

  return (
    <SafeAreaView style={[styles.layoutContainer, style]}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            height: 25,
            width: width(90),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={async () => {
            customArrowBackHandler && (await customArrowBackHandler());
            // goBack();
          }}>
          <Icon
            name="ArrowBack"
            height={height(2)}
            width={width(2.4)}
            style={{ justifyContent: 'center' }}
            fill="yellow"
          />
        </TouchableOpacity>
      </View>
      {children}
    </SafeAreaView>
  );
};
