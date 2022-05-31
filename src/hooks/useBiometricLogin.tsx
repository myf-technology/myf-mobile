import { useNavigation } from '@react-navigation/native';
import {
  authenticateAsync,
  hasHardwareAsync,
  isEnrolledAsync,
} from 'expo-local-authentication';
import { useEffect, useState } from 'react';

import { readUuid } from '../storage/storageUuid';

export default () => {
  const { navigate } = useNavigation();
  const [authenticated, setAuthenticated] = useState<null | boolean>(null);

  useEffect(() => {
    (async () => {
      try {
        const storageUuid = await readUuid();
        if (storageUuid) {
          if ((await isEnrolledAsync()) && (await hasHardwareAsync())) {
            const { success } = await authenticateAsync();
            setAuthenticated(success);
          }
        }
      } catch (error) {
        // Alert.alert('Não conseguimos usar
        // o autenticador do seu celular, vamos te direcionar para o login usual.')
      }
    })();
  }, [navigate]);

  return authenticated;
};
