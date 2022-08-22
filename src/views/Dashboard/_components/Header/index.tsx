import { View } from 'react-native';
import { Agenda } from './_components/Agenda';
import { Balance } from './_components/Balance';
import { HiddenNotify } from './_components/HiddenNotify';
import styles from './styles';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Agenda nextEvent="hey ho" />
      <Balance balanceAmount="-250" />
      <HiddenNotify notify="hey ho" />
    </View>
  );
};
