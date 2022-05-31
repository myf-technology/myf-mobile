import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import containerButtons from './_helpers/containerButtons';
import { iconButtons } from './_helpers/iconButtons';
import iconNavigation from './_helpers/iconNavigation';
import navigationControl from './_helpers/navigationControl';
import styles from './styles';
import { containerButtonsKeys, iconButtonsKeys } from './types';

import { BottomSheet } from '../../../components/BottomSheet';
import { ContainerButton } from '../../../components/ContainerButton';
import { IconButton } from '../../../components/IconButton';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { height, width } from '../../../constants/responsive';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const Area = () => {
  const { navigate } = useNavigation();

  const onPress = (key: containerButtonsKeys) => {
    navigationControl(navigate, key);
  };
  const handlerIcon = (key: iconButtonsKeys) => {
    iconNavigation(navigate, key);
  };

  return (
    <RegisterLayout>
      <View style={styles.container}>
        <Text textAlign="left" font="title">
          Minha área Pix
        </Text>

        <Spacer amount={4} />

        <View style={styles.iconButtons}>
          {iconButtons.map(({ label, icon, key }) => (
            <View key={label} style={styles.iconButtonWrapper}>
              <IconButton
                onPress={() => handlerIcon(key)}
                {...{ icon, label }}
              />
            </View>
          ))}
        </View>

        <Spacer amount={6} />

        {containerButtons.map(({ prefix, suffix, text, key }) => (
          <View key={key}>
            <Spacer amount={1} />
            <ContainerButton
              {...{ suffix, prefix }}
              onPress={() => onPress(key)}
            >
              <Text textAlign="left">{text}</Text>
            </ContainerButton>
          </View>
        ))}
      </View>
      <BottomSheet snapPoints={[height(80)]}>
        <View
          style={{
            backgroundColor: 'blue',
            width: width(50),
            height: height(50),
          }}
        >
          <Text>oi</Text>
        </View>
      </BottomSheet>
    </RegisterLayout>
  );
};
