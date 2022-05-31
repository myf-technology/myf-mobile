import { Image, View } from 'react-native';

import { Text } from '../../../../../components/Text';
import { width } from '../../../../../constants/responsive';

export const ShowAddress = ({ logradouro, bairro, localidade, uf }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      width: width(90),
    }}
  >
    <View>
      <Image
        source={require('../../../../../../assets/images/MapMarker.png')}
      />
    </View>
    <View style={{ marginLeft: width(2) }}>
      <Text textAlign="left" color="grey" font="footnote">
        {logradouro}
      </Text>
      <Text textAlign="left" color="grey" font="footnote">
        {bairro} , {localidade} - {uf}
      </Text>
    </View>
  </View>
);
