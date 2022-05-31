import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '../../../components/Icon';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
// import ArrowBack from '../../../icons/_components/ArrowBack';

// [TODO]: safe area view breaks on storybook but its required on original environment

export interface Iprops extends ViewProps {
  customArrowBackHandler?: () => void;
}

const RegisterLayout = ({
  children,
  style,
  customArrowBackHandler,
}: Iprops) => {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={[styles.layoutContainer, style]}>
      <StatusBar style="dark" />
      <TouchableOpacity
        style={{ height: 40, width: 40 }}
        onPress={async () => {
          customArrowBackHandler && (await customArrowBackHandler());
          goBack();
        }}
      >
        <Icon
          name="ArrowBack"
          height={Layout.window.height * 0.02}
          width={Layout.window.width * 0.024}
          style={{ justifyContent: 'center' }}
          fill="dark"
        />
      </TouchableOpacity>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    padding: Layout.paddingHorizontal,
    backgroundColor: Colors.white,
  },
});

export default RegisterLayout;
