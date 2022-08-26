import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { Text } from '../../../../Text';
import { ICategoryListItemProps } from './types';
import { SwipeRight } from './_components/SwipeRight';

import styles from './styles';

export const CategoryListItem = ({
  categoryItem: { name, id },
}: ICategoryListItemProps) => {
  return (
    <Swipeable
      containerStyle={styles.swipeableContainer}
      overshootLeft={false}
      overshootRight={false}
      renderRightActions={props => <SwipeRight {...props} {...{ id }} />}>
      <RectButton style={styles.itemTextContainer}>
        <Text>{name}</Text>
      </RectButton>
    </Swipeable>
  );
};
