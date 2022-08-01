import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InvisibleInput } from '../../../components/InvisibleInput';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { Spacer } from '../../../components/Spacer';
import Colors from '../../../constants/Colors';
import { PUBLIC } from '../../../navigation/Public/constants';
import { storeEmailAction } from '../../../store/reducers/user/actions';
import { USER_REGISTER } from '../../../store/reducers/user/constants';

export const NameEmail = () => {
  const [loading, setLoading] = useState(false);
  const [flip, setFlip] = useState(false);
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const onArrowPress = () => {
    setLoading(true);
    dispatch({
      type: USER_REGISTER.FULL_NAME,
      payload: {
        fullName: value
      }
    });
    setFlip(true);
    setLoading(false);
  };

  const onSendEmail = () => {
    setLoading(true);
    dispatch(storeEmailAction({ email }));
    navigate(PUBLIC.PASSWORD as never);
    setEmail('');
    setLoading(false);
    setFlip(false);
  };

  return (
    <PageLayout>
      <Spacer amount={25} />
      {!flip ? (
        <InvisibleInput
          arrowForward={value.length >= 3 ? true : false}
          placeholderTextColor={Colors.grey2}
          onArrowPress={onArrowPress}
          onChangeText={setValue}
          placeholder='Nome...'
          loading={loading}
          value={value}
          fontSize={20}
        />
      ) : (
        <InvisibleInput
          arrowForward={email.match('@') ? true : false}
          placeholderTextColor={Colors.grey2}
          onArrowPress={onSendEmail}
          onChangeText={setEmail}
          placeholder='Email...'
          loading={loading}
          fontSize={20}
          value={email}
        />
      )}
    </PageLayout>
  );
};
