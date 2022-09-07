/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Text } from '../../../../components';
import { Colors, width } from '../../../../constants';
import { decimalToBRLCurrency } from '../../../../utils/functions/DecimalToBrlCurrency';
import { ItemsProps } from '../../types';

export const Item = ({
  name,
  description,
  amount,
  // balanceId,
  balanceType,
  balanceDay,
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
        <View style={{ alignItems: 'center' }}>
          <Text color="yellow2" typography="title">
            {moment(balanceDay).format('DD')}
          </Text>
          <Text color="yellow2">{moment(balanceDay).format('HH:mm')}</Text>
        </View>
      </View>
      <View style={{ position: 'absolute', left: width(15) }}>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text color="yellow1">R$ {decimalToBRLCurrency(amount)}</Text>
      </View>
      <View style={{ position: 'absolute', right: width(0.1) }}>
        <Icon
          name={
            balanceType === 'EXPENSE'
              ? 'trending-down-outline'
              : 'trending-up-outline'
          }
          width={25}
          height={25}
          fill={balanceType === 'EXPENSE' ? Colors.red : Colors.green}
        />
      </View>
      <View />
    </View>
  );
};
