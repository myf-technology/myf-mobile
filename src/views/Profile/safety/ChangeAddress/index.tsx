import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Inputs } from './_components/Inputs';

import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Spacer } from '../../../../components/Spacer';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const ChangeAddress = () => (
  <RegisterLayout>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* // TODO: ain't no title for this view ? */}
      {Inputs.map(({ keyboardType, label }) => (
        <Input key={label} keyboardType={keyboardType} label={label} />
      ))}
      <Spacer amount={4} />
      <Button theme="dark" title="Continuar" />
      <Spacer amount={24} />
    </ScrollView>
  </RegisterLayout>
);
