import { useNavigation } from '@react-navigation/native';

import { Button } from '../../../../components/Button';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { PUBLIC } from '../../../../navigation/Public/constants';
import RegisterLayout from '../../_helpers/RegisterLayout';

export const RepresentantGuide = () => {
  const { navigate } = useNavigation();

  const handleNextStep = () => {
    navigate(PUBLIC.CPFCNPJ as never);
  };

  return (
    <RegisterLayout>
      <Text font="body" textAlign="left">
        Agora, vamos precisar de alguns dados do representante da sua empresa.
      </Text>
      <Spacer amount={40} />
      <Text font="body" textAlign="left">
        Não se preocupe, não vai levar nem um minuto.
      </Text>
      <Spacer amount={10} />
      <Button title="Continuar" onPress={handleNextStep} />
    </RegisterLayout>
  );
};
