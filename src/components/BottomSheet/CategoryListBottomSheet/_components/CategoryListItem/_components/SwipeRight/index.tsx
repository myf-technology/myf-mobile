import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Colors } from '../../../../../../../constants';
import { useAsyncDispatch } from '../../../../../../../hooks/useAsyncDispatch';
import { getCategoryById } from '../../../../../ManageCategoryBottomSheet';
import { deleteCategoryByIdAsync } from '../../../../store/reducers/deleteCategoryById';
import styles from './styles';
import { ISwipeRightProps } from './types';

export const SwipeRight = ({ id }: ISwipeRightProps) => {
  const dispatch = useAsyncDispatch();

  const onEdit = () => {
    dispatch(getCategoryById({ categoryId: id }));
  };

  const onDelete = () => {
    dispatch(deleteCategoryByIdAsync(id));
  };

  return (
    <View style={styles.container}>
      <RectButton onPress={onEdit} style={styles.menuButton}>
        <Icon
          fill={Colors.white}
          width={20}
          height={20}
          name="edit-2-outline"
        />
      </RectButton>
      <RectButton onPress={onDelete} style={styles.menuButton}>
        <Icon fill={Colors.red} width={20} height={20} name="trash-outline" />
      </RectButton>
    </View>
  );
};
