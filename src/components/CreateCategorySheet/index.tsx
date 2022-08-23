/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import style from './style';
import { Input } from '../Input';
import { Layout } from '../Layout';
import { Spacer } from '../Spacer';
import { useRef, useState } from 'react';
import { Text } from '../Text';
import { Button } from '../Button';

export const CreateCategorySheet = () => {
  const [newCategory, setNewCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const amountRef = useRef();
  const descriptionRef = useRef();
  const onYesPress = () => {
    ('');
  };
  const onNoPress = () => {
    ('');
  };
  const [value, setValue] = useState('');
  return (
    <Layout>
      <BottomSheet
        handleStyle={style.handleStyle}
        backgroundStyle={style.backgroundStyle}
        snapPoints={[600]}>
        <View style={style.modalView}>
          <Spacer amount={4} />
          <View style={{ alignSelf: 'center' }}>
            <Text style={{ fontSize: 20 }}>Criar Categoria</Text>
          </View>
          <Spacer amount={6} />
          <Input
            returnKeyType="go"
            value={newCategory}
            onChangeText={setNewCategory}
            placeholderTextColor="grey"
            style={style.input}
            placeholder="nova categoria"
            onEndEditing={() => {
              amountRef.current.focus();
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
              style={style.input}
              placeholder="valor projetado ex.: R$ 0,00"
              onEndEditing={() => {
                descriptionRef.current.focus();
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
              style={style.input}
              placeholder="descrição"
              onEndEditing={() => {}}
            />
          ) : null}
          <Spacer amount={8} />
          {amount ? (
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
            <Button title="Criar" />
          </View>
        </View>
      </BottomSheet>
    </Layout>
  );
};
