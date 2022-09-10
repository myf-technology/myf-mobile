import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Input, Spacer, Text } from '../../../../components';
import { formData, IFormData } from './_helpers/initialFormData';
import { ICategoryProps } from './types';
import { useAsyncDispatch } from '../../../../hooks/useAsyncDispatch';

import styles from './styles';
import { fetchCategoryListByTypeAsync } from '../../../../components/BottomSheet/CategoryListBottomSheet';
import { Button } from '../../../../components/Button';

export const CreateBalanceForm = ({
  balanceType = 'INCOME',
  selectedCategory,
}: ICategoryProps) => {
  const isIncome = balanceType === 'INCOME';

  const [form, setForm] = useState<IFormData[]>([]);
  const dispatch = useAsyncDispatch();

  const updateForm = (index: number, value: string) => {
    const newForm = [...form];

    if (form.length === 0) {
      setForm(newForm.concat({ ...formData[0], value }));
      return;
    }

    newForm[index].value = value;

    setForm(() => newForm);
  };

  const formRef = useRef<IFormData[]>(null);
  const populateNewFormNode = useCallback(
    (index: number) => {
      const nextData = formData[index + 1];

      if (nextData) {
        const nextDataExists = formRef.current?.find(
          ({ id }) => id === nextData.id,
        );

        nextDataExists || setForm(prevState => [...prevState, nextData]);
      }
    },
    [formRef],
  );

  const onPress = () => {
    dispatch(fetchCategoryListByTypeAsync({ balanceType }));
  };

  const onChangeText = (value: string, index: number) => {
    updateForm(index, value);
  };

  const onEndEditing = (index: number) => {
    populateNewFormNode(index);
  };

  useEffect(() => {
    if (!selectedCategory?.name) return;

    setForm(prevState => [
      ...prevState,
      {
        ...formData[0],
        value: selectedCategory.name,
        id: selectedCategory.categoryId,
      },
    ]);

    populateNewFormNode(0);
  }, [selectedCategory, populateNewFormNode]);

  const onSubmit = () => {};

  return (
    <>
      <View>
        <Icon
          {...{ onPress }}
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
        {form.length > 3 && <Button title="Adicionar" onPress={onSubmit} />}
      </View>
    </>
  );
};
