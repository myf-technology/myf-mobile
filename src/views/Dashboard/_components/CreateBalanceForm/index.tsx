import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Input, Spacer, Text } from '../../../../components';
import { formData, IFormData } from './_helpers/initialFormData';
import { ICategoryProps } from './types';
import { useAsyncDispatch } from '../../../../hooks/useAsyncDispatch';

import styles from './styles';
import { fetchCategoryListByTypeAsync } from '../../../../components/BottomSheet/CategoryListBottomSheet';
import { Button } from '../../../../components/Button';
import { createBalance } from './store/slice';
import { useSelector } from 'react-redux';
import { IStore } from '../../../../store/types';
import { dialogController } from '../../../../components/Dialog/store/slice';

export const CreateBalanceForm = ({
  balanceType = 'INCOME',
  selectedCategory,
}: ICategoryProps) => {
  const isIncome = balanceType === 'INCOME';

  const [form, setForm] = useState<IFormData[]>([]);
  const dispatch = useAsyncDispatch();
  const selector = useSelector((state: IStore) => state.createBalance);

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

  const onSubmit = async () => {
    const formatedDate = form[1].value.replace(
      /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(\d{4})/g,
      '$3/$2/$1',
    );

    const treatedForm = {
      categoryId: form[0].id,
      eventDate: formatedDate,
      amount: Number(form[2].value),
      description: form[3].value,
    };

    const res: any = await dispatch(createBalance(treatedForm));

    dispatch(dialogController({ visible: true, message: res.payload.message }));
  };

  useEffect(() => {
    if (selector.controls.status === 'fulfilled') {
      setForm([]);
    }
  }, [selector.controls.status]);

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
        {selector.controls.status === 'pending' ? (
          <ActivityIndicator />
        ) : (
          form.map(({ id, label, placeholder, value }, index) => {
            return (
              <View key={id}>
                <Text>{label}:</Text>
                <View style={styles.entry}>
                  <Input
                    editable={!!index}
                    {...{ placeholder, value }}
                    onChangeText={incomeValue =>
                      onChangeText(incomeValue, index)
                    }
                    onEndEditing={() => onEndEditing(index)}
                  />
                </View>
                <Spacer amount={2} />
              </View>
            );
          })
        )}
        {selector.controls.status === 'pending'
          ? null
          : form.length > 3 && <Button title="Adicionar" onPress={onSubmit} />}
      </View>
    </>
  );
};
