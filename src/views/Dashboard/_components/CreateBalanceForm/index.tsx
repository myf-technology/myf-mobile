import { useState } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Input, Spacer, Text } from '../../../../components';
import { formData, IFormData } from './_helpers/initialFormData';
import { ICategoryProps } from './types';
import { useDispatch } from 'react-redux';

import styles from './styles';
import { bottomSheetControl } from '../../../../components/BottomSheet/CategoryListBottomSheet/store/slice';

export const CreateBalanceForm = ({
  categoryType = 'income',
}: ICategoryProps) => {
  const isIncome = categoryType === 'income';
  const [form, setForm] = useState<IFormData[]>([]);
  const dispatch = useDispatch();

  const openModal = () => dispatch(bottomSheetControl({ visible: true }));
  const closeModal = () => dispatch(bottomSheetControl({ visible: false }));

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
