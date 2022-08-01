import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { InvisibleInput } from '../../../components/InvisibleInput';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { Spacer } from '../../../components/Spacer';
import Colors from '../../../constants/Colors';
import { PUBLIC } from '../../../navigation/Public/constants';
import { createUserService } from '../../../services/register-service/registerUser';
import { USER_REGISTER } from '../../../store/reducers/user/constants';

export const Password = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [flip, setFlip] = useState(false);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);

  const onArrowPress = () => {
    setLoading(true);
    setFlip(true);
    setLoading(false);
  };

  const onSendEmail = async () => {
    setLoading(true);

    const data = {
      fullName: userData.fullName,
      email: userData.email,
      password
    };

    console.log('data:', data);

    const res = await createUserService(data);
    console.log('res:', res);

    if (password !== passwordCheck) {
      Alert.alert('Senhas não conferem', 'Tente novamente', [
        {
          text: 'Ok',
          onPress: () => {
            setLoading(false);
            setPassword('');
            setPasswordCheck('');
            setFlip(false);
          }
        }
      ]);
      return;
    }

    dispatch({
      type: USER_REGISTER.PASSWORD,
      payload: {
        password
      }
    });

    // navigate(PUBLIC.VERIFY_EMAIL as never);
    // setPasswordCheck('');
    // setLoading(false);
    // setFlip(true);
  };

  return (
    <PageLayout>
      <Spacer amount={25} />
      {!flip ? (
        <InvisibleInput
          eyeIcon={password.length >= 1 ? (loading ? false : true) : false}
          toggleVisibility={() => setShowPassword(!showPassword)}
          arrowGo={password.length >= 4 ? true : false}
          placeholder='Senha, crie uma.'
          placeholderTextColor={Colors.grey2}
          passwordMode={showPassword}
          onArrowPress={onArrowPress}
          onChangeText={setPassword}
          loading={loading}
          value={password}
          fontSize={20}
        />
      ) : (
        <InvisibleInput
          eyeIcon={passwordCheck.length >= 1 ? (loading ? false : true) : false}
          toggleVisibility={() => setShowPassword(!showPassword)}
          arrowGo={passwordCheck.length >= 1 ? true : false}
          placeholderTextColor={Colors.grey2}
          placeholder='Sua senha, repita.'
          onChangeText={setPasswordCheck}
          passwordMode={showPassword}
          onArrowPress={onSendEmail}
          value={passwordCheck}
          loading={loading}
          fontSize={20}
        />
      )}
    </PageLayout>
  );
};
