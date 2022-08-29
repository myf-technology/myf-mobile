/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon, Input } from '../../../components';
import { Layout } from '../../../components/Layout';
import { Spacer } from '../../../components/Spacer';
import { Colors, width } from '../../../constants';
import { PUBLIC } from '../../../navigation/Public/constants';
import { storeEmailName } from '../store/slice';
// import {PUBLIC} from '../../../navigation/Public/constants';
// import {storeEmailAction} from '../../../store/reducers/user/actions';
// import {USER_REGISTER} from '../../../store/reducers/user/constants';

export const NameEmail = () => {
  const [loading, setLoading] = useState(false);
  const [flip, setFlip] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  console.log(name, email);

  const onArrowPress = () => {
    setLoading(true);
    // dispatch({
    //   type: USER_REGISTER.FULL_NAME,
    //   payload: {
    //     fullName: name,
    //   },
    // });
    setFlip(true);
    setLoading(false);
  };

  const onSendEmail = () => {
    setLoading(true);
    // navigate(PUBLIC.PASSWORD as never);
    setEmail('');
    setLoading(false);
    setFlip(false);
  };

  const onNameChossen = () => {
    setFlip(true);
  };
  const onEmailChossen = () => {
    navigate(PUBLIC.CREATEPASSWORD as never);
    dispatch(storeEmailName({ name, email }));
  };

  const onName = () => (
    <TouchableOpacity
      onPress={onNameChossen}
      style={{ right: width(7), position: 'absolute' }}>
      <Icon name="ArrowForward" />
    </TouchableOpacity>
  );
  const onEmail = () => (
    <TouchableOpacity
      onPress={onEmailChossen}
      style={{ right: width(7), position: 'absolute' }}>
      <Icon name="ArrowForward" />
    </TouchableOpacity>
  );

  return (
    <Layout>
      <Spacer amount={25} />
      {!flip ? (
        <Input
          suffixIcon={name ? onName : null}
          placeholderTextColor={Colors.grey}
          onArrowPress={onArrowPress}
          onChangeText={setName}
          placeholder="Nome..."
          loading={loading}
          value={name}
          fontSize={20}
        />
      ) : (
        <Input
          suffixIcon={email.match('@') ? onEmail : null}
          placeholderTextColor={Colors.grey}
          onChangeText={setEmail}
          placeholder="Email..."
          loading={loading}
          fontSize={20}
          value={email}
        />
      )}
    </Layout>
  );
};
