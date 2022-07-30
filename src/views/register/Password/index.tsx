import { useState } from 'react';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { FlashInput } from './_components/FlashInput';

export const Password = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [res, setRes] = useState(0);
  const onArrowPress = () => {
    setLoading(true);
    setTimeout(() => {
      setPassword('');
      setLoading(false);
      setRes(200);
    }, 3000);
  };

  const onSendEmail = () => {
    setLoading(true);
    setTimeout(() => {
      setPasswordCheck('');
      setLoading(false);
      setRes(200);
    }, 3000);
  };

  return (
    <PageLayout>
      {res !== 200 ? (
        <FlashInput
          eyeIcon={password.length >= 1 ? (loading ? false : true) : false}
          arrowForward={password.length >= 4 ? true : false}
          onArrowPress={onArrowPress}
          onChangeText={setPassword}
          placeholder='Crie uma senha...'
          loading={loading}
          value={password}
          passwordMode={showPassword}
          toggleVisibility={() => setShowPassword(!showPassword)}
        />
      ) : (
        <FlashInput
          eyeIcon={passwordCheck.length >= 1 ? (loading ? false : true) : false}
          arrowForward={passwordCheck.length >= 1 ? true : false}
          onChangeText={setPasswordCheck}
          placeholder='Repita sua senha...'
          onArrowPress={onSendEmail}
          value={passwordCheck}
          loading={loading}
          passwordMode={showPassword}
          toggleVisibility={() => setShowPassword(!showPassword)}
        />
      )}
    </PageLayout>
  );
};
