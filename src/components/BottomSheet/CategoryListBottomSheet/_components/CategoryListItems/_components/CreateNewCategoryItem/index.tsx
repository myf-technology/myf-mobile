import { RectButton } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { Text } from '../../../../../../Text';
import { manageCategoryBottomSheetControl } from '../../../../../ManageCategoryBottomSheet';
import styles from './styles';

export const CreateNewCategoryItem = () => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(manageCategoryBottomSheetControl({ visible: true }));
  };

  return (
    <RectButton {...{ onPress }} style={styles.container}>
      <Text>Criar nova categoria</Text>
    </RectButton>
  );
};
