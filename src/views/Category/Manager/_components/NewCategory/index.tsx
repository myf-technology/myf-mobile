import { width } from '../../../../../constants/responsive';
import { Icon } from '../../../../../components/Icon';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../../components/Text';
import { useState } from 'react';
import { Spacer } from '../../../../../components/Spacer';
import Colors from '../../../../../constants/Colors';
import { InvisibleInput } from '../../../../../components/InvisibleInput';

export const NewCategory = () => {
  const [clicked, setClicked] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [nameDate, setNameDate] = useState(false);
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
              onArrowPress={() => {
                setNameDate(true);
              }}
              value={categoryName}
              onChangeText={setCategoryName}
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
