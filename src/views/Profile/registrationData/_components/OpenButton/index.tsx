import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import styles from './Styles';

import { Spacer } from '../../../../../components/Spacer';
import { Text } from '../../../../../components/Text';

export const OpenButton = (props) => (
  <Animated.View {...props} style={styles.dropDown}>
    <View style={styles.text}>
      <Text textAlign="left">
        {props.fullname ? 'Nome completo' : ''}
        {props.IDnumber ? 'Número do documento' : ''}
      </Text>
      <Text font="subhead" textAlign="left">
        {props.fullname}
        {props.IDnumber}
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">
        {props.phoneNumber ? 'Celular' : ''}
        {props.dispatch ? 'Estado de expedição do documento' : ''}
      </Text>
      <Text font="subhead" textAlign="left">
        {props.phoneNumber}
        {props.dispatch}
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">
        {props.address ? 'Endereço residencial' : ''}
        {props.dispatchDate ? 'Data de expedição' : ''}
      </Text>
      <Text font="subhead" textAlign="left">
        {props.address}
        {props.dispatchDate}
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">{props.bday ? 'Data de nascimento' : ''}</Text>
      <Text font="subhead" textAlign="left">
        {props.bday}
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">{props.email ? 'Emails' : ''}</Text>
      <Text font="subhead" textAlign="left">
        {props.email}
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">{props.cpf ? 'CPF' : ''}</Text>
      <Text font="subhead" textAlign="left">
        {props.cpf}
      </Text>
    </View>
  </Animated.View>
);
