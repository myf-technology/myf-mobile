/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, Input } from '../../../components';
// import {useDispatch} from 'react-redux';
import { Layout } from '../../../components/Layout';
import { Spacer } from '../../../components/Spacer';
import { Colors, width } from '../../../constants';
import { PUBLIC } from '../../../navigation/Public/constants';
// import {PUBLIC} from '../../../navigation/Public/constants';
// import {storeEmailAction} from '../../../store/reducers/user/actions';
// import {USER_REGISTER} from '../../../store/reducers/user/constants';

export const NameEmail = () => {
  const [loading, setLoading] = useState(false);
  const [flip, setFlip] = useState(false);
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const { navigate } = useNavigation();
  // const dispatch = useDispatch();

  const onArrowPress = () => {
    setLoading(true);
    // dispatch({
    //   type: USER_REGISTER.FULL_NAME,
    //   payload: {
    //     fullName: value,
    //   },
    // });
    setFlip(true);
    setLoading(false);
  };

  const onSendEmail = () => {
    setLoading(true);
    // dispatch(storeEmailAction({email}));
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
          suffixIcon={value ? onName : null}
          placeholderTextColor={Colors.grey}
          onArrowPress={onArrowPress}
          onChangeText={setValue}
          placeholder="Nome..."
          loading={loading}
          value={value}
          fontSize={20}
        />
      ) : (
        <Input
          suffixIcon={email.match('@') ? onEmail : null}
          placeholderTextColor={Colors.grey}
          onArrowPress={onSendEmail}
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
