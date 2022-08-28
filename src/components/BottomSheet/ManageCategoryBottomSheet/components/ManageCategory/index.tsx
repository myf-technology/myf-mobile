import { useEffect, useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Input } from '../../../..';
import { useAsyncDispatch } from '../../../../../hooks/useAsyncDispatch';
import { IStore } from '../../../../../store/types';
import { Button } from '../../../../Button';
import { Spacer } from '../../../../Spacer';
import { Text } from '../../../../Text';
import { fetchCategoryListByTypeAsync } from '../../../CategoryListBottomSheet';
import { createCategory } from '../../store/actions/createCategory';
import { editCategory } from '../../store/actions/editCategory';
import styles from './styles';

export const ManageCategory = () => {
  const { category, balanceType, visible } = useSelector(
    ({ manageCategoryBottomSheet, bottomSheet }: IStore) => ({
      category: manageCategoryBottomSheet.category,
      balanceType: bottomSheet.controls.balanceType,
      visible: manageCategoryBottomSheet.controls.visible,
    }),
  );

  const dispatch = useAsyncDispatch();

  const [newCategory, setNewCategory] = useState(category?.name || '');
  const [amount, setAmount] = useState(category?.projectedAmount || '');
  const [description, setDescription] = useState(category?.description || '');
  const [autoInsert, setAutoInsert] = useState(
    typeof category?.autoInsert === 'boolean' ? category.autoInsert : false,
  );

  const amountRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);

  const onYesPress = () => {
    setAutoInsert(true);
  };

  const onNoPress = () => {
    setAutoInsert(false);
  };

  const onPress = async () => {
    const newCategoryData = {
      autoInsert,
      balanceType: balanceType!,
      name: newCategory,
      description,
      projectedAmount: Number(amount),
    };

    if (!category) {
      await dispatch(createCategory(newCategoryData));

      dispatch(fetchCategoryListByTypeAsync({ balanceType }));

      return;
    }

    await dispatch(
      editCategory({
        categoryId: category.id,
        categoryData: newCategoryData,
      }),
    );

    dispatch(fetchCategoryListByTypeAsync({ balanceType }));
  };

  useEffect(() => {
    if (!visible) {
      setNewCategory('');
      setAmount('');
      setDescription('');
      setAutoInsert(false);
    }
  }, [visible]);

  return (
    <View style={styles.modalView}>
      <Spacer amount={4} />

      <View style={styles.titleContainer}>
        <Text typography="subhead">
          {category ? 'Editar' : 'Criar'} Categoria
        </Text>
      </View>
      <Spacer amount={6} />

      <Input
        returnKeyType="go"
        value={newCategory}
        onChangeText={setNewCategory}
        placeholderTextColor="grey"
        style={styles.input}
        placeholder={`${category ? 'Editar' : 'Criar'} categoria`}
        onEndEditing={() => {
          amountRef?.current?.focus();
        }}
      />
      <Spacer amount={4} />

      {newCategory ? (
        <Input
          ref={amountRef}
          returnKeyType="go"
          value={amount}
          onChangeText={setAmount}
          placeholderTextColor="grey"
          style={styles.input}
          placeholder="valor projetado ex.: R$ 0,00"
          onEndEditing={() => {
            descriptionRef?.current?.focus();
          }}
          autoFocus={false}
        />
      ) : null}

      <Spacer amount={4} />
      {amount ? (
        <Input
          autoFocus={false}
          ref={descriptionRef}
          returnKeyType="go"
          value={description}
          onChangeText={setDescription}
          placeholderTextColor="grey"
          style={styles.input}
          placeholder="descrição"
          onEndEditing={() => {}}
        />
      ) : null}
      <Spacer amount={8} />

      {amount ? (
        <View style={styles.radioContainer}>
          <Text> Definir como inseção automática ?</Text>
          <TouchableOpacity onPress={onYesPress}>
            <Text color="green">sim</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onNoPress}>
            <Text color="red">não</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <Spacer amount={8} />

      <View>
        <Button {...{ onPress }} title={`${category ? 'Salvar' : 'Criar'}`} />
      </View>
    </View>
  );
};
