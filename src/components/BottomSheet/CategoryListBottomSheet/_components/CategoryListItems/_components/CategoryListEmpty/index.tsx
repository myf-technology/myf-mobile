import { View } from 'react-native';
import { Text } from '../../../../../../Text';

import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../../../../../../store/types';

import styles from './styles';
import { Button } from '../../../../../../Button';
import { Spacer } from '../../../../../../Spacer';
import { manageCategoryBottomSheetControl } from '../../../../../ManageCategoryBottomSheet';

export const CategoryListEmpty = () => {
  const {
    controls: { balanceType },
  } = useSelector(({ bottomSheet }: IStore) => bottomSheet);
  const dispatch = useDispatch();

  const type = balanceType === 'INCOME' ? '"Ganhos"' : '"Despesas"';
  const message = `Não temos categorias do tipo ${type}`;

  const onPress = () => {
    dispatch(manageCategoryBottomSheetControl({ visible: true }));
  };

  return (
    <View style={styles.textContainer}>
      <Text typography="title1" style={styles.text} color="white">
        {message}
      </Text>
      <Spacer amount={1} />
      <Button title="Criar uma nova categoria" onPress={onPress} />
    </View>
  );
};
