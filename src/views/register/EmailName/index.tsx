import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PageLayout from '../../../components/PageLayout/PageLayout';
import Colors from '../../../constants/Colors';
import { PUBLIC } from '../../../navigation/Public/constants';
import { storeEmailAction } from '../../../store/reducers/user/actions';
import { FlashInput } from './_components/FlashInput';

export const NameEmail = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [res, setRes] = useState(0);
  const onArrowPress = () => {
    setLoading(true);
    setTimeout(() => {
      setValue('');
      setLoading(false);
      setRes(200);
    }, 3000);
  };

  const onSendEmail = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(storeEmailAction({ email }));

      navigate(PUBLIC.PASSWORD as never);
      setEmail('');
      setLoading(false);
      setRes(200);
    }, 3000);
  };

  return (
    <PageLayout>
      {res !== 200 ? (
        <FlashInput
          value={value}
          onArrowPress={onArrowPress}
          arrowForward={value.length >= 3 ? true : false}
          onChangeText={setValue}
          loading={loading}
          placeholder='Nome...'
          placeholderTextColor={Colors.grey2}
          fontSize={20}
        />
      ) : (
        <FlashInput
          value={email}
          onArrowPress={onSendEmail}
          arrowForward={email.match('@') ? true : false}
          onChangeText={setEmail}
          loading={loading}
          placeholder='Email...'
          placeholderTextColor={Colors.grey2}
          fontSize={20}
        />
      )}
    </PageLayout>
  );
};
