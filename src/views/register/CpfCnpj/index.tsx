import { useNavigation } from '@react-navigation/native';
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import findCurrentStep from './helpers/findCurrentStep';

import { Button } from '../../../components/Button';
import { Theme } from '../../../components/Button/types';
import { Input } from '../../../components/Input';
import { cnpjMask, cpfMask } from '../../../components/Input/helpers/masks';
import { cpfcnpjValidations } from '../../../components/Input/helpers/validations';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { COMPANY } from '../../../navigation/Public/Company/constants';
import { PUBLIC } from '../../../navigation/Public/constants';
import { readUuid } from '../../../storage/storageUuid';
import {
  registerCompanyDocument,
  registerCompanySync,
} from '../../../store/reducers/company/actions';
import {
  registerDocument,
  registerEmailMobile,
} from '../../../store/reducers/user/actions';
import { Store } from '../../../store/types';
import RegisterLayout from '../_helpers/RegisterLayout';

export const CpfCnpj = () => {
  const company = useSelector(({ company }: Store) => company);
  const inputRef: MutableRefObject<{ blur(): void } | null> = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [payload, setPayload] = useState({
    cnpj: false,
    document: '',
  });

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const asyncValidation = useCallback(async () => {
    const validations = await cpfcnpjValidations(payload);

    validations === 'CPF/CNPJ já cadastrado.'
      ? setErrorMessage(validations)
      : setErrorMessage('');

    validations ? setDisabled(true) : setDisabled(false);

    return validations;
  }, [payload, setDisabled]);

  useEffect(() => {
    const res = async () => {
      const uuid = await readUuid();

      if (uuid) {
        // email and mobile arent necessary, just wanna add new uuid
        dispatch(
          registerEmailMobile({
            email: '',
            mobile: '',
            uuid,
          })
        );
      }
    };

    res();
  }, [dispatch]);

  useEffect(() => {
    asyncValidation();
  }, [asyncValidation]);

  useEffect(() => {
    company.uuid && setPayload({ cnpj: false, document: '' });
  }, [company.uuid, setPayload]);

  const handleTextChange = async (document: string) => {
    const cnpj = document.length > 11;

    setPayload({ ...payload, document, cnpj });
  };

  const handleNextStep = async () => {
    const currentStep = await findCurrentStep(payload);
    setErrorMessage('');
    inputRef?.current?.blur();

    const validations = await asyncValidation();

    if (validations) {
      if (payload.document === '') return;

      setErrorMessage(validations);
      return;
    }

    const cnpj = payload.document.length > 11;

    console.log(currentStep);
    cnpj
      ? dispatch(registerCompanyDocument(payload))
      : dispatch(registerDocument(payload));

    switch (currentStep) {
      case 'company':
        // todo: make a better way to make company.uuid not null
        dispatch(
          registerCompanySync({
            errorMessage: null,
            loading: false,
            status: 'success',
            uuid: 'true',
          })
        );

        navigate(PUBLIC.JURIDICAL_PERSON as any, {
          screen: COMPANY.REPRESENTANT_GUIDE,
        });
        break;

      case 'representative':
        navigate(PUBLIC.ADDRESS as never);
        break;

      case 'address':
        navigate(PUBLIC.PASSWORD as never);
        break;

      case 'user':
        navigate(PUBLIC.SELFIE as never);
        break;

      case 'docs':
        // todo: if docs are complete, go to waiting page
        navigate(PUBLIC.SELFIE as never);
        break;

      default:
        if (cnpj) {
          navigate(PUBLIC.JURIDICAL_PERSON as never);
        } else {
          navigate(PUBLIC.BIRTHDATE as never);
        }
        break;
    }
  };

  return (
    <RegisterLayout>
      <Text textAlign="left" font="title2">
        {company.uuid ? 'Informe seu CPF' : 'Informe seu CPF ou CNPJ'}
      </Text>

      <Spacer amount={6} />
      <Input
        value={payload.document}
        refs={inputRef}
        keyboardType="number-pad"
        returnKeyType="done"
        errorMessage={errorMessage}
        label={
          company.uuid
            ? 'Por favor informe seu CPF'
            : 'Por favor informe seu CPF ou CNPJ'
        }
        onChangeText={handleTextChange}
        onSubmitEditing={handleNextStep}
        maxLength={company.uuid ? 14 : 18}
        mask={payload.cnpj ? cnpjMask : cpfMask}
      />

      <Spacer amount={6} />
      <Button
        disabled={disabled}
        onPress={handleNextStep}
        testID="button"
        theme={disabled ? Theme.disabled : Theme.dark}
        title="Proximo passo"
      />
    </RegisterLayout>
  );
};
