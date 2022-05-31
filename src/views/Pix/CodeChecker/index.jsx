import React from 'react';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

const ContagemRegressiva = () => <Text font="title2">35</Text>;

export const CodeChecker = () => (
  <RegisterLayout>
    <Text textAlign="left" font="title">
      Insira o código enviado via SMS para
    </Text>
    <Spacer amount={6} />
    <Input maxLength={6} label="Código enviado" placeholder="000000" />
    <Text>
      Você pode enviar novamente em {<ContagemRegressiva />} segundos...
    </Text>
    <Spacer amount={30} />
    <Button title="Gerar" theme="dark" />
  </RegisterLayout>
);
