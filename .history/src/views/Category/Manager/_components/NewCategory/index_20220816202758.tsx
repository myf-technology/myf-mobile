import { InvisibleInput } from '../../../../../components/InvisibleInput';
import { width } from '../../../../../constants/responsive';
import { Spacer } from '../../../../../components/Spacer';
import { Icon } from '../../../../../components/Icon';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../../components/Text';
import Colors from '../../../../../constants/Colors';
import { useState } from 'react';

export const NewCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [nameDate, setNameDate] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [amountValue, setAmountValue] = useState('');
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon name='PlusSign' fill='white' />
          <Text style={{ marginLeft: width(2) }} color='white'>
            Nova categoria
          </Text>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </TouchableOpacity>
      {clicked ? (
        <View>
          <Spacer amount={1.5} />
          {!nameDate ? (
            <InvisibleInput
              arrowPosition={5}
              onArrowPress={() => {
                setNameDate(true);
              }}
              value={categoryName}
              onChangeText={setCategoryName}
              style={{ fontSize: 18, color: Colors.white }}
              placeholder='Nome para a categoria...'
              arrowGo={categoryName.length > 3 ? true : false}
            />
          ) : (
            <InvisibleInput
              arrowPosition={5}
              onArrowPress={() => {
                setNameDate(false);
              }}
              value={amountValue}
              onChangeText={setAmountValue}
              style={{ fontSize: 18, color: Colors.white }}
              placeholder='Nome para a categoria...'
              arrowGo={categoryName.length > 3 ? true : false}
            />
          )}
        </View>
      ) : null}
    </View>
  );
};
