import { useNavigation } from '@react-navigation/native';
import { MutableRefObject, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import { useDispatch } from 'react-redux';

import inputState from './helpers/inputState';

import { Button } from '../../../components/Button';
import { Theme } from '../../../components/Button/types';
import { DatePicker, FakeInput } from '../../../components/DatePicker';
import { formatDate } from '../../../components/Deprecated.DatePicker/IosDatePicker/helpers/formatDate';
import { birthdate } from '../../../components/Deprecated.DatePicker/helpers/validations';
import { Input } from '../../../components/Input';
import { fullName } from '../../../components/Input/helpers/validations';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { Toggle } from '../../../components/Toggle';
import Colors from '../../../constants/Colors';
import { PUBLIC } from '../../../navigation/Public/constants';
import { registerNameBirthdate } from '../../../store/reducers/user/actions';
import RegisterLayout from '../_helpers/RegisterLayout';

export const Birthdate = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(inputState);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageBirthdate, setErrorMessageBirthdate] = useState('');
  const [payload, setPayload] = useState({
    name: '',
    birthdate: '',
    isPep: false,
  });
  const [display, setDisplay] = useState<boolean>(false);

  const inputRef: MutableRefObject<{ blur(): void } | null> = useRef(null);

  const onPress = () => {
    inputRef?.current?.blur();
    setDisplay(true);
    setErrorMessageBirthdate('');
  };

  const nameChangeHandler = (name: string) => {
    setPayload({ ...payload, name });
  };

  const nameBlurHandler = () => {
    payload.name === ''
      ? setErrorMessage('')
      : setErrorMessage(fullName(payload));
  };

  const nameFocusHandler = () => {
    setDisplay(false);

    if (birthdate(payload) && payload.birthdate !== '') {
      setErrorMessageBirthdate(birthdate(payload));
      return;
    }
  };

  const onBlur = () => {
    if (birthdate(payload) && payload.birthdate !== '') {
      setErrorMessageBirthdate(birthdate(payload));
    } else {
      setErrorMessageBirthdate('');
    }
  };

  const onSubmitEditing = () => {
    setErrorMessageBirthdate('');
    setDisplay(false);

    if (payload.birthdate !== '') {
      setErrorMessageBirthdate(birthdate(payload));
    }
  };

  const getDate = (birthdate: string) => {
    setPayload({ ...payload, birthdate });

    const formattedDate = formatDate(birthdate);

    setInputs(
      inputs.map((input) => ({
        ...input,
        value: formattedDate && formattedDate[input.key],
      }))
    );
  };

  const handleNextStep = () => {
    if (fullName(payload) || birthdate(payload)) {
      setErrorMessage(fullName(payload));
      setErrorMessageBirthdate(birthdate(payload));

      return;
    }

    setInputs((oldInputs) => [
      ...oldInputs.map((input) => ({
        ...input,
        value: '',
      })),
    ]);
    navigate(PUBLIC.EMAIL as never);
    dispatch(registerNameBirthdate(payload));
  };

  // const onChangeText = (text: string, index: number) => {
  //   const inputsCopy = [...inputs];
  //   inputsCopy[index].value = text;
  //   setInputs(inputsCopy);

  //   let birthdateJoin = '';

  //   inputs[2].value &&
  //     inputs[1].value &&
  //     inputs[0].value &&
  //     (birthdateJoin = `${inputs[2].value}-${inputs[1].value}-${inputs[0].value}`);

  //   index === inputs.length - 1 &&
  //     setPayload({ ...payload, birthdate: birthdateJoin });
  // };
  const changeHandler = (formattedDate, normalizeDate) => {
    Platform.OS === 'android' && setDisplay(false);
    const datesArr = [];

    for (const date in formattedDate) {
      datesArr.push(formattedDate[date]);
    }

    datesArr.map((value, index) => {
      const newState = [...inputs];
      newState[index].value = value;

      setInputs(newState);
    });

    setPayload({ ...payload, birthdate: normalizeDate });
  };

  const onPressToggle = () => setPayload({ ...payload, isPep: !payload.isPep });

  return (
    <>
      <RegisterLayout
        customArrowBackHandler={() => {
          setInputs((oldInputs) => [
            ...oldInputs.map((input) => ({
              ...input,
              value: '',
            })),
          ]);
        }}
      >
        <Input
          autoCapitalize="words"
          onBlur={nameBlurHandler}
          onFocus={nameFocusHandler}
          refs={inputRef}
          label="Nome completo"
          containerTestID="input"
          onChangeText={nameChangeHandler}
          errorMessage={errorMessage}
          value={payload.name}
        />

        <Spacer amount={4} />
        <FakeInput
          label="Data de nascimento"
          onPress={onPress}
          inputs={inputs}
        />

        <Spacer amount={2} />
        <Text color={Colors.red} textAlign="left">
          {errorMessageBirthdate}
        </Text>

        <Spacer amount={4} />

        <Toggle
          on={payload.isPep}
          onPress={onPressToggle}
          text="Você é politicamente exposto ?"
        />

        <Spacer amount={4} />
        <Button
          onPress={handleNextStep}
          testID="button"
          title="Proximo passo"
          theme={Theme.dark}
        />
      </RegisterLayout>
      <DatePicker
        onSubmitEditing={onSubmitEditing}
        open={display}
        onChange={changeHandler}
        returnKeyType="done"
      />
    </>
  );
};
