import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { cnpjMask, cpfMask } from '../../components/Input/helpers/masks';
import { PathLink } from '../../components/PathLink';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import Colors from '../../constants/Colors';
import { PUBLIC } from '../../navigation/Public/constants';
import { NAVIGATORS } from '../../navigation/constants';
import { getFinancePasswordAPI } from '../../services/finance-password';
import { authenticationAPI } from '../../services/login-service';
import { storeAccountId } from '../../storage/storageAccountId';
import { storeToken } from '../../storage/storageToken';
import { storeUuid } from '../../storage/storageUuid';
import RegisterLayout from '../register/_helpers/RegisterLayout';

export const Login = () => {
  const { navigate } = useNavigation();
  // const authenticated = useBiometricLogin();
  const [textCpf, setTextCpf] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordMode, setPasswordMode] = useState(true);

  const toggleVisibility = () => {
    setPasswordMode(!passwordMode);
  };

  const onEnter = async () => {
    const responsive = await getFinancePasswordAPI();

    const res = await authenticationAPI({
      cpf: textCpf,
      password: textPassword,
    });

    if (res?.data?.permission?.is_approved) {
      storeUuid(res.data.user.uuid);
      storeToken(res.data.token.access_token);
      storeAccountId(res.data.permission.account_id);

      if (!responsive.data.password) {
        navigate(NAVIGATORS.PRIVATE as never);
        return;
      }
      navigate(PUBLIC.FINANCE_PASSWORD as never);
      return;
    } else if (res?.data?.permission?.peending_approve) {
      navigate(PUBLIC.AKNOWLEDGEMENT as never);
      return;
    } else if (res?.data?.permission?.is_blocked) {
      setError('Usuário bloqueado');
      return;
    }

    setError('Usuario não encontrado');
  };

  const focusHandler = () => {
    setError('');
  };

  // useEffect(() => {
  //   authenticated && navigate(NAVIGATORS.PRIVATE as never);
  // }, [authenticated, navigate]);

  return (
    <RegisterLayout style={{backgroundColor:'black'}}>
      <Text color='white' textAlign="left" font="title2">
        Bem vindo!
      </Text>

      <Spacer amount={6} />
      <Input
        keyboardType="number-pad"
        mask={textCpf.length > 11 ? cnpjMask : cpfMask}
        onFocus={focusHandler}
        onChangeText={(textCpf) => {
          setTextCpf(textCpf);
        }}
        returnKeyType="done"
        label="CPF ou CNPJ do usuário"
        
      />
      <Input
        onFocus={focusHandler}
        onChangeText={(textPassword) => {
          setTextPassword(textPassword);
        }}
        secureTextEntry={true}
        returnKeyType="done"
        label="Senha"
        {...{ passwordMode, toggleVisibility }}
      />
      <Text color={Colors.red}>{error}</Text>

      <Spacer amount={6} />
      <Button theme='white' onPress={onEnter} testID="button" title="Entrar" />
      <Spacer amount={4} />

      <PathLink destination={''}>Esqueci minha senha</PathLink>

      <Spacer amount={18} />
      <Text textAlign="center" font="footnote">
        Entre utilizando sua impressão digital
      </Text>
    </RegisterLayout>
  );
};
