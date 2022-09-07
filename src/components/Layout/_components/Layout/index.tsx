/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import { width, height } from '../../../../constants';
import styles from './styles';

import { Icon } from 'react-native-eva-icons';
import { ILayoutProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../Text';

export const Layout = ({
  children,
  style,
  pageTitle,
  customArrowBackHandler,
}: ILayoutProps) => {
  const { goBack } = useNavigation();

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
            goBack();
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="arrow-back"
              height={height(2)}
              width={width(2.4)}
              style={{ justifyContent: 'center' }}
              fill="yellow"
            />
            <View
              style={{
                justifyContent: 'center',
                width: width(95),
              }}>
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                }}>
                {pageTitle}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {children}
    </SafeAreaView>
  );
};
