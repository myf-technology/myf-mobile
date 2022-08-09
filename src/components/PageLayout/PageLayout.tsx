import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { width } from '../../constants/responsive';

import { Icon } from '../Icon';
import { Tooltips } from '../Tooltips';

// import ArrowBack from '../../../icons/_components/ArrowBack';

// [TODO]: safe area view breaks on storybook but its required on original environment

export interface Iprops extends ViewProps {
  customArrowBackHandler?: () => void;
  blockStepBack?: boolean;
  toolTips?: boolean;
  pageTitle?: string;
}

const PageLayout = ({
  children,
  style,
  blockStepBack,
  toolTips,
  pageTitle,
  customArrowBackHandler
}: Iprops) => {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={[styles.layoutContainer, style]}>
      <StatusBar style='white' />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            height: 25,
            width: width(90),
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          onPress={
            blockStepBack
              ? null
              : async () => {
                  customArrowBackHandler && (await customArrowBackHandler());
                  goBack();
                }
          }
        >
          <Icon
            name='ArrowBack'
            height={Layout.window.height * 0.02}
            width={Layout.window.width * 0.024}
            style={{ justifyContent: 'center' }}
            fill='yellow'
          />
          <Text
            style={{
              color: Colors.yellow3,
              // position: 'absolute',
              // left: width(8),
              fontSize: width(6),
              bottom: width(1.4)
              // justifyContent: 'center'
            }}
          >
            {pageTitle}
          </Text>
          {toolTips ? <Tooltips /> : <View></View>}
        </TouchableOpacity>
      </View>

      {/* {stepBack ? (
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
            style={{ justifyContent: "center" }}
            fill="dark"
          />
        </TouchableOpacity>
      ) : (
        <View style={{ height: 40, width: 40 }}>
          <Icon
            name="ArrowBack"
            height={Layout.window.height * 0.02}
            width={Layout.window.width * 0.024}
            style={{ justifyContent: "center" }}
            fill="dark"
          />
        </View>
      )} */}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    padding: Layout.paddingHorizontal,
    backgroundColor: 'black'
  }
});

export default PageLayout;
