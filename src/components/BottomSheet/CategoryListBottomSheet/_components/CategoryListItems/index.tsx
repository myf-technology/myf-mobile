import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { IStore } from '../../../../../store/types';
import { CategoryListItem } from '../CategoryListItem';
import styles from './styles';
import { CategoryListLoading } from './_components/CategoryListLoading';

export const CategoryListItems = () => {
  const {
    controls: { status },
    list,
  } = useSelector(({ bottomSheet }: IStore) => bottomSheet);

  if (status === 'loading') {
    return <CategoryListLoading />;
  }

  return (
    <View style={styles.container}>
      {list.map(categoryItem => (
        <View key={categoryItem.id}>
          <CategoryListItem {...{ categoryItem }} />
        </View>
      ))}
    </View>
  );
};
