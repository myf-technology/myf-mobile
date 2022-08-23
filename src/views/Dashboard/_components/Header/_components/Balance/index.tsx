import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Text } from '../../../../../../components';

interface balanceProps {
  balanceAmount?: string;
}

export const Balance = ({ balanceAmount }: balanceProps) => {
  const isIncome = !balanceAmount?.includes('-');

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text typography="caption">Balance</Text>
        <Icon
          height={20}
          width={20}
          name={isIncome ? 'chevron-up' : 'chevron-down'}
          fill={isIncome ? 'green' : 'red'}
        />
      </View>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text color="yellow2" typography="caption">
            R$
          </Text>
          <Text typography="footnote" color={isIncome ? 'green' : 'red'}>
            {' '}
            {balanceAmount}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
