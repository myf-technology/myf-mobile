import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Spacer } from '../../../../components/Spacer';
import { COMPANY } from '../../../../navigation/Public/Company/constants';
import { registerCompanyName } from '../../../../store/reducers/company/actions';
import RegisterLayout from '../../_helpers/RegisterLayout';

export const Name = () => {
  const dispatch = useDispatch();
  const [socialName, setSocialName] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [revenues, setRevenues] = useState(0);
  const { navigate } = useNavigation();

  const handleNextStep = () => {
    navigate(COMPANY.EMAIL as never);
    dispatch(registerCompanyName({ socialName, fantasyName, revenues }));
  };

  const socialNameHandler = (value: string) => {
    setSocialName(value);
  };
  const fantasyNameHandler = (value: string) => {
    setFantasyName(value);
  };
  const revenuesHandler = (value: string) => {
    setRevenues(Number(value));
  };

  return (
    <RegisterLayout>
      <Input onChangeText={socialNameHandler} label="Razão Social" />
      <Input onChangeText={fantasyNameHandler} label="Nome Fantasia" />
      {/* todo [validations]: make it accept only numbers */}
      <Input onChangeText={revenuesHandler} label="Receita" />

      <Spacer amount={10} />
      <Button onPress={handleNextStep} title="Próximo passo" />
    </RegisterLayout>
  );
};
