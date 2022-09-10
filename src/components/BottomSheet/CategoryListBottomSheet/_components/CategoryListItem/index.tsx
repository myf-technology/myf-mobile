import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { Text } from '../../../../Text';
import { ICategoryListItemProps } from './types';
import { SwipeRight } from './_components/SwipeRight';

import styles from './styles';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../../../../../views/Dashboard/_components/CreateBalanceForm/store/slice';
import { bottomSheetControl } from '../../store/slice';

export const CategoryListItem = ({
  categoryItem: { name, id, balanceType },
}: ICategoryListItemProps) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(selectCategory({ name, categoryId: id, balanceType }));
    dispatch(bottomSheetControl({ visible: false }));
  };
  return (
    <Swipeable
      containerStyle={styles.swipeableContainer}
      overshootLeft={false}
      overshootRight={false}
      renderRightActions={props => <SwipeRight {...props} {...{ id }} />}>
      <RectButton onPress={onPress} style={styles.itemTextContainer}>
        <Text>{name}</Text>
      </RectButton>
    </Swipeable>
  );
};
