/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import { View } from 'react-native';
import { Spacer, Text } from '../../../../components';
import { Colors, width } from '../../../../constants';
import { decimalToBRLCurrency } from '../../../../utils/functions/DecimalToBrlCurrency';
import { BalanceInselfProps } from '../../types';

export const BalanceInself = ({
  date,
  received = 0,
  freeAmount = 0,
  expenses = 0,
}: BalanceInselfProps) => {
  return (
    <View
      style={{
        width: width(90),
        alignSelf: 'center',
        justifyContent: 'flex-start',
      }}>
      <Text style={{ alignSelf: 'center' }}>
        {moment(date).format('MMMM-YYYY')}
      </Text>
      <Spacer amount={1} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.green,
            width: width(2),
            height: width(2),
            borderRadius: width(10),
            alignItems: 'center',
            flexDirection: 'row',
          }}
        />
        <View style={{ marginLeft: width(2) }}>
          <Text>R$ {decimalToBRLCurrency(received)}</Text>
        </View>
      </View>
      <Spacer amount={1} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.yellow1,
            width: width(2),
            height: width(2),
            borderRadius: width(10),
            alignItems: 'center',
            flexDirection: 'row',
          }}
        />
        <View style={{ marginLeft: width(2) }}>
          <Text>R$ {decimalToBRLCurrency(freeAmount)}</Text>
        </View>
      </View>
      <Spacer amount={1} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.red,
            width: width(2),
            height: width(2),
            borderRadius: width(10),
            alignItems: 'center',
            flexDirection: 'row',
          }}
        />
        <View style={{ marginLeft: width(2) }}>
          <Text>R$ {decimalToBRLCurrency(expenses)}</Text>
        </View>
      </View>
    </View>
  );
};
