import { View } from 'react-native';
import { Text } from '../../../../../../Text';

import { useSelector } from 'react-redux';
import { IStore } from '../../../../../../../store/types';

import styles from './styles';

export const CategoryListEmpty = () => {
  const {
    controls: { balanceType },
  } = useSelector(({ bottomSheet }: IStore) => bottomSheet);

  const type = balanceType === 'INCOME' ? '"Ganhos"' : '"Despesas"';
  const message = `Não há categoria do tipo \n${type}\nclick no icone abaixo para criar uma nova categoria`;

  return (
    <View style={styles.textContainer}>
      <Text typography="title1" style={styles.text} color="white">
        {message}
      </Text>
    </View>
  );
};
