import { useNavigation } from '@react-navigation/native';
import { MutableRefObject, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import { ShowAddress } from './_components/ShowAddress';
import error from './helpers/error';
import formState from './helpers/formState';

import { Button } from '../../../components/Button';
import { Theme } from '../../../components/Button/types';
import { Input } from '../../../components/Input';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import useFormLayout from '../../../hooks/useFormLayout';
import { PUBLIC } from '../../../navigation/Public/constants';
import {
  getCEPAddressAPI,
  registerAddressAPI,
} from '../../../services/register-service';
import { readUuid } from '../../../storage/storageUuid';
import RegisterLayout from '../_helpers/RegisterLayout';

export const Address = () => {
  const { navigate } = useNavigation();
  const marginBottom = useFormLayout();
  const user = useSelector((state) => state.user);

  const [form, setForm] = useState(formState);
  const [showInputsUp, setShowInputsUp] = useState(false);
  const [CEP, setCEP] = useState('');
  const [showAddress, setShowAddress] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const elRefs: MutableRefObject<TextInput[]> = useRef([]);

  const onCPFrefs = useRef();

  const onCPFchanges = (value) => {
    setCEP(value);

    if (value.length === 8) {
      onCPFrefs.current.blur();
    }
    return;
  };

  const onCEPBlur = async () => {
    const res = await getCEPAddressAPI(CEP);
    console.log({ res });
    setShowAddress(res.data);
    setAddress(res.data.logradouro);
    setNeighborhood(res.data.bairro);
    setCity(res.data.localidade);
    setState(res.data.uf);
    // console.log(neighborhood);
  };

  const handleBlur = (index: number, id: string, value: string) => {
    error(form, value, id, setForm, index);
  };

  const onSubmitEditing = (index: number, lastInput: boolean) => {
    !lastInput && elRefs?.current[index + 1]?.focus();
  };

  const handleNextStep = async () => {
    setShowInputsUp(true);

    const uuid = await readUuid();
    const data = {
      uuid: uuid,
      zipcode: CEP,
      is_company: user.cnpj,
      complement: complement,
      number: number,
      address: address,
      neighborhood: neighborhood,
      state: state,
      city: city,
    };

    const res = await registerAddressAPI(data);

    if (res.status === 'success') {
      navigate(PUBLIC.PASSWORD as never);
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView
        style={{ marginBottom }}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <RegisterLayout>
          <Text font="callout" textAlign="left">
            Por favor, digite o seu endereço
          </Text>
          <Spacer amount={2} />
          <Input
            refs={onCPFrefs}
            onBlur={onCEPBlur}
            onChangeText={onCPFchanges}
            label="CEP"
          />
          <Spacer amount={showInputsUp ? 0 : 45} />
          {showInputsUp ? (
            <View>
              <ShowAddress
                localidade={showAddress.localidade}
                bairro={showAddress.bairro}
                logradouro={showAddress.logradouro}
                uf={showAddress.uf}
              />
              <Spacer amount={6} />
              <Input onChangeText={setNumber} label="Número" />
              <Spacer amount={2} />
              <Input onChangeText={setComplement} label="Complemento" />
              <Spacer amount={4} />
            </View>
          ) : null}
          <Button
            onPress={handleNextStep}
            testID="button"
            title={showInputsUp ? 'Continuar' : 'Buscar'}
            theme={Theme.dark}
          />
        </RegisterLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
