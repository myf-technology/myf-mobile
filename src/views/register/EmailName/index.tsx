import { useState } from 'react';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { FlashInput } from './_components/FlashInput';

export const NameEmail = () => {
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
          holder='Nome...'
        />
      ) : (
        <FlashInput
          value={email}
          onArrowPress={onSendEmail}
          arrowForward={email.match('@') ? true : false}
          onChangeText={setEmail}
          loading={loading}
          holder='Email...'
        />
      )}
    </PageLayout>
  );
};
