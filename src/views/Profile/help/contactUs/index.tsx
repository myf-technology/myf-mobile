import React from 'react';

import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const ContactUs = () => (
  <RegisterLayout>
    <Text textAlign="left" font="title">
      Envie sua mensagem
    </Text>
    <Spacer amount={4} />
    {/* TODO: should we have a text limit ? */}
    <Input label="Informe qual a sua renda" />
    <Spacer amount={4} />
    <Button title="Enviar" theme="dark" />
  </RegisterLayout>
);
