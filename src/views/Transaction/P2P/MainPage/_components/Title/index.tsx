import { View } from 'react-native';

import { Spacer } from '../../../../../../components/Spacer';
import { Text } from '../../../../../../components/Text';
import { width } from '../../../../../../constants/responsive';
import styles from '../../styles';
import { SearchBar } from '../SearchBar';
import { Throwback } from '../Throwback';

export const Title = () => (
  <View style={{ width: width(90), alignSelf: 'center' }}>
    <Spacer amount={2} />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Throwback />
      <View style={styles.searchbar}>
        <SearchBar />
      </View>
    </View>
    <Spacer amount={2} />
    <Text textAlign="left" font="title">
      Pessoas
    </Text>
  </View>
);
