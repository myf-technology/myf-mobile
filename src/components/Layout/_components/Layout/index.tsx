import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import { width, height } from '../../../../constants';
import styles from './styles';

import { Icon } from 'react-native-eva-icons';
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
            width: width(100),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={async () => {
            customArrowBackHandler && (await customArrowBackHandler());
            // goBack();
          }}>
          <Icon
            // TODO: add back arrow icon
            name="arrow-ios-back-outline"
            height={height(5)}
            width={width(10)}
            style={{ justifyContent: 'center' }}
            fill="yellow"
          />
        </TouchableOpacity>
      </View>
      {children}
    </SafeAreaView>
  );
};
