import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../../components/Spacer';
import { Text } from '../../../../../components/Text';

export const TicketInfo = ({ title, content }) => {
  const [symbol, setSymbol] = useState('');

  useEffect(() => {
    switch (title) {
      case 'Taxa do parcelamento':
        setSymbol('R$');
        break;

      case 'Parcelas':
        setSymbol('6x R$');
        break;

      default:
        break;
    }
  }, []);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <Text textAlign="left">{title}</Text>
      </View>
      <View>
        <Text textAlign="left" font="subhead">
          {symbol}
          {content}
        </Text>
      </View>
    </View>
  );
};
