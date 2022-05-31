import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Spacer } from '../../../../components/Spacer';
import { COMPANY } from '../../../../navigation/Public/Company/constants';
import {
  registerCompany,
  registerCompanyEmail,
  registerCompanyPhone,
} from '../../../../store/reducers/company/actions';
import { Store } from '../../../../store/types';
import RegisterLayout from '../../_helpers/RegisterLayout';

export const Email = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  // todo [UI]: handle these cases
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { errorMessage, loading, status } = useSelector(
    ({ company }: Store) => company.control
  );

  const handleNextStep = async () => {
    dispatch(registerCompany());
  };

  const emailInputHandler = (email: string) => {
    dispatch(registerCompanyEmail({ email }));
  };

  const phoneInputHandler = (phone: string) => {
    dispatch(registerCompanyPhone({ phone }));
  };

  useEffect(() => {
    if (status === 'success') {
      navigate(COMPANY.REPRESENTANT_GUIDE as never);
    }
  }, [status, navigate]);

  return (
    <RegisterLayout>
      <Input onChangeText={emailInputHandler} label="Email" />
      <Input label="Confirmação do email" />
      <Input onChangeText={phoneInputHandler} label=" Número de telefone" />

      <Spacer amount={10} />
      <Button onPress={handleNextStep} title="Próximo passo" />
    </RegisterLayout>
  );
};
