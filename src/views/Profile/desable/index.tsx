import React from 'react';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const DisableAccount = () => {
  const name = 'Banco';

  return (
    <RegisterLayout>
      <Text font="title" textAlign="left">
        Desativar conta
      </Text>

      <Spacer amount={2} />
      <Text font="subhead" textAlign="left">
        Tem certeza que deseja desativar sua conta?
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">
        Se você acha que não vai usar o {name} novamente e deseja desativar sua
        conta
      </Text>
      <Spacer amount={16} />
      <Button theme="red" title="Desativar conta" />
    </RegisterLayout>
  );
};
