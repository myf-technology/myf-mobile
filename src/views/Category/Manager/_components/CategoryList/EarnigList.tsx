import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import { Icon } from '../../../../../components/Icon';
import { Spacer } from '../../../../../components/Spacer';
import { Text } from '../../../../../components/Text';
import Colors from '../../../../../constants/Colors';
import { width } from '../../../../../constants/responsive';

export interface CategoryListProps {
  EarningCategory: string;
  id: number;
  onGearPress: () => void;
  averangeDate?: string;
  averangeAmount?: number;
  description?: string;
  onTrashPress: () => void;
  onPress?: () => void;
}

export const EarnigList = ({
  EarningCategory,
  description,
  averangeDate,
  averangeAmount,
  onTrashPress,
  onGearPress,
  onPress,
  id
}: CategoryListProps) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setShowDetails(!showDetails);
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon style={{ marginRight: width(2) }} name='Penny' fill={id === 1 ? 'green' : 'red'} />
          <Text color={Colors.yellow3}>{EarningCategory}</Text>
        </View>
        <Spacer amount={1} />
      </TouchableOpacity>
      <View>
        {showDetails ? (
          <View
            style={{
              alignItems: 'flex-start',
              marginLeft: width(4),
              flexDirection: 'row'
            }}
          >
            <View>
              <Spacer amount={0.5} />

              <Text color={Colors.grey4}>Valor Estimado</Text>
              <MaskInput
                mask={Masks.BRL_CURRENCY}
                style={{ color: Colors.yellow3, fontSize: 16, left: width(10) }}
                value={String(averangeAmount)}
              />

              <Spacer amount={1} />

              <Text textAlign='left' color={Colors.grey4}>
                Data média
              </Text>
              <Text style={{ left: width(10) }} textAlign='left' color={Colors.yellow3}>
                {averangeDate}
              </Text>
              <Spacer amount={1} />
              <Text textAlign='left' color={Colors.grey4}>
                Descrição
              </Text>
              <Text style={{ left: width(10) }} textAlign='left' color={Colors.yellow3}>
                {description}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: width(70)
              }}
            >
              <TouchableOpacity onPress={onGearPress}>
                <Icon style={{ marginTop: width(0.5) }} name='Gear' fill='grey4' />
              </TouchableOpacity>
              <TouchableOpacity onPress={onTrashPress}>
                <Icon style={{ marginLeft: width(6) }} name='Trash' fill='red' />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <Spacer amount={3} />
      </View>
    </>
  );
};
