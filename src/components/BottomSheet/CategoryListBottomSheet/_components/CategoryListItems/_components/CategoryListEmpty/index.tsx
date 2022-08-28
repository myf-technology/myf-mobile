import { View } from 'react-native';
import { Text } from '../../../../../../Text';

import { useSelector } from 'react-redux';
import { IStore } from '../../../../../../../store/types';

import styles from './styles';
import { Button } from '../../../../../../Button';
import { Spacer } from '../../../../../../Spacer';

export const CategoryListEmpty = () => {
  const {
    controls: { balanceType },
  } = useSelector(({ bottomSheet }: IStore) => bottomSheet);

  const type = balanceType === 'INCOME' ? '"Ganhos"' : '"Despesas"';
  const message = `Não temos categorias do tipo ${type}`;

  return (
    <View style={styles.textContainer}>
      <Text typography="title1" style={styles.text} color="white">
        {message}
      </Text>
      <Spacer amount={1} />
      <Button title="Criar uma nova categoria" onPress={() => ''} />
    </View>
  );
};
