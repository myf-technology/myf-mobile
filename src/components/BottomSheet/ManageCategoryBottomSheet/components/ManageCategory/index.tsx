import { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Input } from '../../../..';
import { IStore } from '../../../../../store/types';
import { Button } from '../../../../Button';
import { Spacer } from '../../../../Spacer';
import { Text } from '../../../../Text';
import styles from './styles';
import { IManageCategoryProps } from './types';

export const ManageCategory = ({ onPress }: IManageCategoryProps) => {
  const { category } = useSelector(
    ({ manageCategoryBottomSheet }: IStore) => manageCategoryBottomSheet,
  );

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
        <Button
          onPress={() =>
            onPress && onPress({ newCategory, amount, description, autoInsert })
          }
          title={`${category ? 'Salvar' : 'Criar'}`}
        />
      </View>
    </View>
  );
};
