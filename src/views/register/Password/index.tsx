import { useNavigation } from '@react-navigation/native';
import { MutableRefObject, useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import togglesState from './helpers/togglesState';
import styles from './styles';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Spacer } from '../../../components/Spacer';
import { Toggle } from '../../../components/Toggle';
import { PUBLIC } from '../../../navigation/Public/constants';
import { registerPasswordAPI } from '../../../services/register-service';
import { registerPassword } from '../../../store/reducers/user/actions';
import { userRootState } from '../../../store/reducers/user/types';
import { Store } from '../../../store/types';
import RegisterLayout from '../_helpers/RegisterLayout';

export const Password = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({ password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageConfirm, setErrorMessageConfirm] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const { uuid } = useSelector(({ user }: { user: userRootState }) => user);
  const { uuid: companyUuid, document } = useSelector(
    ({ company }: Store) => company
  );

  const inputRef: MutableRefObject<{ blur(): void } | null> = useRef(null);
  const inputConfirmRef: MutableRefObject<{ blur(): void } | null> =
    useRef(null);

  const passwordChangeHandler = (password: string) => {
    setPayload({ ...payload, password });
    if (
      confirmPasswordValue !== '' &&
      confirmPasswordValue !== payload.password
    ) {
      setErrorMessageConfirm('As senhas devem ser iguais');
    }
  };

  const passwordConfirmHandler = (text: string) => {
    setConfirmPasswordValue(text);
  };

  const onBlurPassword = () => {
    setErrorMessage('');

    if (payload.password.length < 5) {
      setErrorMessage('A senha deve contar o mínimo de seis digitos');
    }
  };

  const onBlurConfirmPassword = () => {
    setErrorMessageConfirm('');

    if (confirmPasswordValue !== payload.password) {
      setErrorMessageConfirm('As senhas devem ser iguais');
    }
  };
  const [passwordMode, setPasswordMode] = useState(true);
  const [passwordModeConfirm, setPasswordModeConfirm] = useState(true);
  const [toggles, setToggles] = useState(togglesState);

  const toggleVisibility = () => {
    setPasswordMode(!passwordMode);
  };

  const toggleVisibilityConfirm = () => {
    setPasswordModeConfirm(!passwordModeConfirm);
  };

  const handleNextStep = async () => {
    inputRef?.current?.blur();
    inputConfirmRef?.current?.blur();

    if (payload.password === '' && confirmPasswordValue === '') {
      setErrorMessageConfirm('Campo Obrigatório');
      setErrorMessage('Campo Obrigatório');
      return;
    }

    if (
      errorMessage === '' &&
      errorMessageConfirm === '' &&
      payload.password === confirmPasswordValue
    ) {
      navigate(PUBLIC.SELFIEGUIDE as never);

      dispatch(registerPassword(payload));

      // todo: activation token, maybe will be used.
      await registerPasswordAPI({
        password: payload.password,
        is_company: !!document,
        uuid: document ? companyUuid : uuid,
      });

      return;
    }
  };

  return (
    <RegisterLayout>
      <Spacer amount={4} />
      <Input
        refs={inputRef}
        containerTestID="input"
        maxLength={30}
        onBlur={onBlurPassword}
        errorMessage={errorMessage}
        toggleVisibility={toggleVisibilityConfirm}
        passwordMode={passwordModeConfirm}
        onChangeText={passwordChangeHandler}
        label="Senha"
      />

      <Spacer amount={4} />
      <Input
        refs={inputConfirmRef}
        containerTestID="input"
        toggleVisibility={toggleVisibility}
        passwordMode={passwordMode}
        errorMessage={errorMessageConfirm}
        onBlur={onBlurConfirmPassword}
        onChangeText={passwordConfirmHandler}
        label="Confirmação senha"
      />

      <View style={styles.toggles}>
        <View style={styles.toggleWrapper}>
          {toggles.map(({ testID, text, id, on }, index) => (
            <View key={id}>
              <Spacer amount={4} />
              <Toggle
                testID={testID}
                on={on}
                text={text}
                onPress={() => {
                  const newToggle = [...toggles];
                  toggles[index].on = !on;
                  setToggles(newToggle);
                }}
              />
            </View>
          ))}
        </View>
      </View>

      <Button onPress={handleNextStep} title="Proximo passo" theme="dark" />
    </RegisterLayout>
  );
};
