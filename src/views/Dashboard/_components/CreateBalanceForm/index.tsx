import { useRef, useState } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Input, Spacer, Text } from '../../../../components';
import { formData, IFormData } from './_helpers/initialFormData';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';

import styles from './styles';
import { ICategoryData } from '../CategoryListBottomSheet/types';
import { ICategoryProps } from './types';

export const CreateBalanceForm = ({
  categoryType = 'income',
}: ICategoryProps) => {
  const isIncome = categoryType === 'income';
  const [form, setForm] = useState<IFormData[]>([]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const openModal = () => bottomSheetRef.current?.snapToIndex(1);
  const closeModal = () => bottomSheetRef.current?.snapToIndex(0);

  const updateForm = (index: number, value: string) => {
    const newForm = [...form];
    newForm[index].value = value;

    setForm(() => newForm);
  };

  const populateNewFormNode = (index: number) => {
    const nextData = formData[index + 1];

    if (nextData) {
      const nextDataExists = form.find(({ id }) => id === nextData.id);

      nextDataExists || setForm(prevState => [...prevState, nextData]);
    }
  };

  const onPress = () => {
    openModal();
  };

  // const onItemPress = ({ value }: ICategoryData) => {
  //   setForm(prevState => [...prevState, { ...formData[0], value }]);
  //   populateNewFormNode(0);
  //   closeModal();
  // };

  const onChangeText = (value: string, index: number) => {
    updateForm(index, value);
  };

  const onEndEditing = (index: number) => {
    populateNewFormNode(index);
  };

  return (
    <>
      <View>
        <Icon
          onPress={onPress}
          name="plus-circle-outline"
          fill={isIncome ? 'green' : 'red'}
          height={30}
          width={30}
        />
        <Spacer amount={2} />

        {form.map(({ id, label, placeholder, value }, index) => {
          return (
            <View key={id}>
              <Text>{label}:</Text>
              <View style={styles.entry}>
                <Input
                  editable={!!index}
                  {...{ placeholder, value }}
                  onChangeText={incomeValue => onChangeText(incomeValue, index)}
                  onEndEditing={() => onEndEditing(index)}
                />
              </View>
              <Spacer amount={2} />
            </View>
          );
        })}
      </View>
    </>
  );
};
