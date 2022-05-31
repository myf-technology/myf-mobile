import React from 'react';
import { View } from 'react-native';

import { Inputs } from './_components/Inputs';

import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const PasswordReset = () => (
  <RegisterLayout>
    <Text font="title" textAlign="left">
      Redefinir senha
    </Text>
    <Spacer amount={4} />
    {/* //TODO: the password most be hidden ? */}
    {Inputs.map(({ label }) => (
      <View key={label}>
        <Input label={label} />
      </View>
    ))}
    <Spacer amount={6} />
    <Button title="Salver" theme="dark" />
  </RegisterLayout>
);
