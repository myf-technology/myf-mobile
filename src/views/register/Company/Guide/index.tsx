import { useNavigation } from '@react-navigation/native';

import HumanCloudBuilding from '../../../../components/Assets/HumanCloudBuilding';
import { Button } from '../../../../components/Button';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { COMPANY } from '../../../../navigation/Public/Company/constants';
import RegisterLayout from '../../_helpers/RegisterLayout';

export const Guide = () => {
  const { navigate } = useNavigation();

  return (
    <RegisterLayout>
      <Text font="body" textAlign="left">
        Para começar,{'\n'}vamos precisar de alguns dados da sua empresa.
      </Text>
      <Spacer amount={2} />
      <HumanCloudBuilding />
      <Spacer amount={1} />
      <Text font="body" textAlign="left">
        Não se preocupe, não vai levar nem um minuto.
      </Text>
      <Spacer amount={6} />
      <Button
        title="Continuar"
        onPress={() => navigate(COMPANY.NAME as never)}
      />
    </RegisterLayout>
  );
};
