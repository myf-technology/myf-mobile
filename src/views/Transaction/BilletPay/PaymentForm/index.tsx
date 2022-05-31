import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { containerButtons } from './_helpers/containerButtons';
import styles from './styles';

import { ContainerButton } from '../../../../components/ContainerButton';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { FORM } from '../../../../navigation/Private/PayMethods/Manually/PaymentForm/constants';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const PaymentForm = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate(FORM.BALANCEPAYMENT as never);
  };

  return (
    <RegisterLayout>
      <Spacer amount={2} />
      <Text font="title" textAlign="left">
        Como deseja realizar o pagamento?
      </Text>
      <Spacer amount={4} />
      <Text textAlign="left">Saldo em conta</Text>
      <Spacer amount={1} />
      <ContainerButton onPress={onPress} height={16} prefix="DollarSign">
        <Text textAlign="left">Usar saldo ao pagar</Text>
        <Spacer amount={0.5} />
        <Text font="subhead" textAlign="left">
          Saldo disponível: R$ 0,00
        </Text>
      </ContainerButton>
      <Spacer amount={3} />
      <Text textAlign="left">Meus cartões</Text>
      <Spacer amount={1} />
      {containerButtons.map(({ suffix, prefix, title, content }) => (
        <View key={title}>
          <ContainerButton suffix={suffix} prefix={prefix}>
            <View style={title === '' ? styles.content : <></>}>
              <Text textAlign="left">{title}</Text>
              <Spacer amount={0.5} />
              <Text font="subhead" textAlign="left">
                {content}
              </Text>
            </View>
          </ContainerButton>
          <Spacer amount={2} />
        </View>
      ))}
    </RegisterLayout>
  );
};
