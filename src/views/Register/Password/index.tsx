/* eslint-disable react-native/no-inline-styles */
// import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Icon, Input, Layout, Text } from '../../../components';
import { Colors, width } from '../../../constants';
import { Spacer } from '../../../components/Spacer';
import { TouchableOpacity } from 'react-native';
// import { Alert, View } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { PUBLIC } from '../../../navigation/Public/constants';
// import { createUserService } from '../../../services/register-service/registerUser';
// import { USER_REGISTER } from '../../../store/reducers/user/constants';

export const Password = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [flip, setFlip] = useState(false);
  // const { navigate } = useNavigation();
  // const dispatch = useDispatch();
  // const userData = useSelector((state: any) => state.user);

  const onArrowPress = () => {
    setLoading(true);
    setFlip(true);
    setLoading(false);
  };

  // const onSendEmail = async () => {
  //   setLoading(true);
  // const data = {
  //   fullName: userData.fullName,
  //   email: userData.email,
  //   password,
  // };

  // const res = await createUserService(data);
  // console.log('res:', res.status);

  // if (res.status === 400) {
  //   Alert.alert(
  //     res.data.message,
  //     'Já existe um usuário cadastrado com este e-mail.',
  //     [
  //       {
  //         text: 'Blz ?',
  //         onPress: () => {
  //           navigate(PUBLIC.HOME as never);
  //         },
  //       },
  //     ],
  //   );
  // }
  // if (password !== passwordCheck) {
  //   Alert.alert('Senhas não conferem', 'Tente novamente', [
  //     {
  //       text: 'Ok',
  //       onPress: () => {
  //         setLoading(false);
  //         setPassword('');
  //         setPasswordCheck('');
  //         setFlip(false);
  //       },
  //     },
  //   ]);
  //   return;
  // }

  // if (res.status === 200) {
  //   dispatch({
  //     type: USER_REGISTER.PASSWORD,
  //     payload: {
  //       password,
  //     },
  //   });

  //   navigate(PUBLIC.VERIFY_EMAIL as never);
  //   setPasswordCheck('');
  //   setLoading(false);
  //   setFlip(true);
  // }
  // };

  const onEye = () => (
    <TouchableOpacity style={{ right: width(7), position: 'absolute' }}>
      <Icon name="ArrowForward" />
    </TouchableOpacity>
  );

  return (
    <Layout>
      <Spacer amount={25} />
      {!flip ? (
        <Input
          eyeIcon={password.length >= 4 ? (loading ? false : true) : false}
          toggleVisibility={() => setShowPassword(!showPassword)}
          suffixIcon={password.length >= 4 ? onEye : null}
          placeholder="Senha, crie uma."
          placeholderTextColor={Colors.grey2}
          passwordMode={showPassword}
          onArrowPress={onArrowPress}
          onChangeText={setPassword}
          loading={loading}
          value={password}
          fontSize={20}
        />
      ) : (
        <Input
          eyeIcon={passwordCheck.length >= 1 ? (loading ? false : true) : false}
          toggleVisibility={() => setShowPassword(!showPassword)}
          arrowGo={passwordCheck.length >= 1 ? true : false}
          placeholderTextColor={Colors.grey}
          placeholder="Sua senha, repita."
          onChangeText={setPasswordCheck}
          passwordMode={showPassword}
          // onArrowPress={onSendEmail}
          value={passwordCheck}
          loading={loading}
          fontSize={20}
        />
      )}
    </Layout>
  );
};
