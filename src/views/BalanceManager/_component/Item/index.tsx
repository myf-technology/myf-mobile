/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Spacer, Text } from '../../../../components';
import { Colors, width } from '../../../../constants';
import { decimalToBRLCurrency } from '../../../../utils/functions/DecimalToBrlCurrency';
import { ItemsProps } from '../../types';

export const Item = ({
  iconIndicator = 'trending-down-outline',
  categoryName,
  balanceAmount,
  eventDate = 0,
}: ItemsProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: width(80),
        alignSelf: 'center',
        marginBottom: width(6),
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text color="yellow2" typography="title">
          {eventDate}
        </Text>
      </View>
      <View style={{ position: 'absolute', left: width(15) }}>
        <Text>{categoryName}</Text>
        <Text color="yellow1">R$ {decimalToBRLCurrency(balanceAmount)}</Text>
      </View>
      <View style={{ position: 'absolute', right: width(0.1) }}>
        <Icon
          name={iconIndicator}
          width={25}
          height={25}
          fill={
            iconIndicator === 'trending-down-outline'
              ? Colors.red
              : Colors.green
          }
        />
      </View>
      <View />
    </View>
  );
};
