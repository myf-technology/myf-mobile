import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { Button } from '../../../components/Button';
import { Theme } from '../../../components/Button/types';
import { Input } from '../../../components/Input';
import { mobileMask } from '../../../components/Input/helpers/masks';
import { Spacer } from '../../../components/Spacer';
import { PUBLIC } from '../../../navigation/Public/constants';
import {
  registerPhysicalPerson,
  registerCompanyRepresentative,
} from '../../../services/register-service';
import { storeUuid } from '../../../storage/storageUuid';
import { registerEmailMobile } from '../../../store/reducers/user/actions';
import { Store } from '../../../store/types';
import RegisterLayout from '../_helpers/RegisterLayout';

export const Email = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({ email: '', mobile: '' });
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [emailConfirmationErrorMessage, setEmailConfirmationErrorMessage] =
    useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');

  const { document, name, birthdate, devicePushToken, isPep } = useSelector(
    (state) => state.user
  );

  const {
    uuid,
    document: companyDocument,
    revenues,
  } = useSelector(({ company }: Store) => company);

  const emailChangeHandler = (email: string) => {
    setPayload({ ...payload, email });
  };

  const mobileChangeHandler = (mobile: string) => {
    setPayload({ ...payload, mobile });
  };

  const handleNextStep = async () => {
    const data = {
      document,
      is_cnpj: !!companyDocument,
      name,
      date_of_birth: birthdate,
      email: payload.email,
      mobile: payload.mobile,
      device_id: 'lcvdskvnk-asqwsvds-qwersadfr-vdsvdsvd2',
      // notification_token:  devicePushToken.data,
      notification_token: 'lcvdskvnk-asqwsvds-qwersadfr-vdsvdsvd1',
      is_pep: isPep ? 1 : 0,
      company_uuid: uuid,
      revenues,
    };
    console.log(data);

    let isValid = true;

    if (payload.mobile.length !== 11) {
      setPhoneNumberErrorMessage('Número telefónico deve ter 11 dígitos.');
      isValid = false;
    }

    if (!validator.isEmail(payload.email) && payload.email.length <= 0) {
      setEmailErrorMessage('Campo obrigatório.');
      isValid = false;
    }

    if (emailConfirmation.length <= 0) {
      setEmailConfirmationErrorMessage('Campo obrigatório.');
      isValid = false;
    }

    if (emailConfirmation !== payload.email) {
      setEmailConfirmationErrorMessage('Email e confirmação não conferem.');
      isValid = false;
    }

    if (
      emailErrorMessage !== '' ||
      phoneNumberErrorMessage !== '' ||
      emailConfirmationErrorMessage !== ''
    ) {
      setEmailConfirmation(emailErrorMessage);
      setPhoneNumberErrorMessage(phoneNumberErrorMessage);
      setEmailConfirmationErrorMessage(emailConfirmationErrorMessage);

      isValid = false;
    }

    if (!isValid) return;

    let res;

    if (companyDocument) {
      res = await registerCompanyRepresentative(data);
    } else {
      res = await registerPhysicalPerson(data);
    }

    if (res?.data) {
      // todo: maybe will not be stored now.
      await storeUuid(res.data.uuid);

      navigate(PUBLIC.ADDRESS as never);
      dispatch(
        registerEmailMobile({
          ...payload,
          uuid: res.data.uuid,
        })
      );
      return;
    }

    console.log(data);
    console.warn({ res }); // todo removable
    Alert.alert(
      'Algo deu errado',
      'Parece que há algo de errado com os seus dados, tente novamente'
    );

    return;
  };

  const handleEmailValidationBlur = () => {
    setEmailErrorMessage('');

    if (!validator.isEmail(payload.email) && payload.email !== '') {
      setEmailErrorMessage('Email inválido');
    }
  };

  const handleConfirmationEmailBlur = () => {
    if (emailConfirmation === payload.email) {
      setEmailConfirmationErrorMessage('');
    }
    if (emailConfirmation !== payload.email) {
      setEmailConfirmationErrorMessage('Os emails não correspondem');
    }
  };

  const handlePhoneNumberValidationBlur = () => {
    if (payload.mobile === '') {
      setPhoneNumberErrorMessage('');
    }

    console.log(payload.mobile.length < 11);

    if (payload.mobile.length < 11) {
      setPhoneNumberErrorMessage('Número telefónico deve ter 11 dígitos.');
    }

    if (
      !validator.isMobilePhone(payload.mobile, 'pt-BR') &&
      payload.mobile !== ''
    ) {
      setPhoneNumberErrorMessage('Número de telefone inválido');
    }
    if (
      validator.isMobilePhone(payload.mobile, 'pt-BR') &&
      payload.mobile !== ''
    ) {
      setPhoneNumberErrorMessage('');
    }
  };

  const handleConfirmationEmailChange = (email: string) => {
    setEmailConfirmation(email);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        testID="input-test"
        alwaysBounceVertical={false}
        bounces={false}
      >
        <RegisterLayout>
          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            containerTestID="inputs"
            onChangeText={emailChangeHandler}
            label="Email"
            onBlur={handleEmailValidationBlur}
            errorMessage={emailErrorMessage}
          />
          <Spacer amount={4} />
          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            containerTestID="inputs"
            onChangeText={handleConfirmationEmailChange}
            label="Confimação de email"
            onBlur={handleConfirmationEmailBlur}
            errorMessage={emailConfirmationErrorMessage}
          />
          <Spacer amount={4} />
          <Input
            keyboardType="number-pad"
            containerTestID="inputs"
            onChangeText={mobileChangeHandler}
            label="Número de telefone"
            onBlur={handlePhoneNumberValidationBlur}
            errorMessage={phoneNumberErrorMessage}
            mask={mobileMask}
            returnKeyType="done"
          />
          <Spacer amount={4} />
          <Button
            testID="button"
            onPress={handleNextStep}
            theme={Theme.dark}
            title="Proximo passo"
          />
        </RegisterLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
