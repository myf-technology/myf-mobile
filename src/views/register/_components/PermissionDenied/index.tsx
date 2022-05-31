import { View } from 'react-native';

import styles from './styles';

import { Button } from '../../../../components/Button';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import RegisterLayout from '../../_helpers/RegisterLayout';

// [TODO]: go to login!
export const PermissionDenied = () => (
  <RegisterLayout style={styles.layout}>
    <View style={styles.card}>
      <Spacer amount={5} />
      <Text textAlign="left" font="title3">
        Nos perdoe pelo transtorno!
      </Text>

      <Spacer amount={5} />
      <Text textAlign="left" font="callout">
        Nós precisamos de algumas imagens para concluir o seu cadastro.
      </Text>

      <Spacer amount={1} />
      <Text textAlign="left" font="callout">
        Porém, o acesso à camera foi negado. É necessário que vá até as
        configurações do seu celular e habilite.
      </Text>

      <Spacer amount={1} />
      <Text textAlign="left" font="body">
        Agradecemos a compreensão!
      </Text>

      <Spacer amount={10} />
      <Button onPress={() => ''} theme="dark" title="Quero fazer login" />
    </View>
  </RegisterLayout>
);
