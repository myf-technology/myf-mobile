import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { IStore } from '../../../../../store/types';
import { CategoryListItem } from '../CategoryListItem';
import {
  CreateCategoryError,
  CategoryListEmpty,
  CategoryListLoading,
  CreateNewCategoryItem,
} from './_components/';

import styles from './styles';

export const CategoryListItems = () => {
  const {
    controls: { status },
    list,
  } = useSelector(({ bottomSheet }: IStore) => bottomSheet);

  if (status === 'loading') {
    return <CategoryListLoading />;
  }

  if (status === 'rejected') {
    return <CreateCategoryError />;
  }

  if (list.length === 0) {
    return <CategoryListEmpty />;
  }

  return (
    <View style={styles.container}>
      {list.map(categoryItem => (
        <View key={categoryItem.id}>
          <CategoryListItem {...{ categoryItem }} />
        </View>
      ))}
      <CreateNewCategoryItem />
    </View>
  );
};
