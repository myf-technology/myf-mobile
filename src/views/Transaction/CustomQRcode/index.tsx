import { useNavigation } from '@react-navigation/native';
import { Alert, Image, View } from 'react-native';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { width } from '../../../constants/responsive';
import { DASHBOARD } from '../../../navigation/Private/Dashboard/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const CustomQRcode = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    Alert.alert('aviso', 'mensagem', [
      {
        onPress: () => {
          navigate(DASHBOARD.DASHBOARD as never);
        },
        text: 'Confirmar',
      },
    ]);
  };

  return (
    <RegisterLayout>
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: width(60) }}>
          <Text>Você mostra seu código personalizado ou compartilhar</Text>
        </View>
        <Spacer amount={2} />
        <View>
          <Image source={require('../../../../assets/images/QRcode.png')} />
        </View>
        <Spacer amount={2} />
        <View>
          <Text font="title">R$ 0,00</Text>
        </View>
        <Spacer amount={20} />
        <Button onPress={onPress} title="Compartilhar código" />
      </View>
    </RegisterLayout>
  );
};
