import { useRef } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { IStore } from '../../../../../store/types';
import { CreateCategorySheet } from '../../../../CreateCategorySheet';
import { Text } from '../../../../Text';
import { CategoryListItem } from '../CategoryListItem';
import { EmptyCategoryList } from '../EmptyCategoryList';
import styles from './styles';
import { CategoryListLoading } from './_components/CategoryListLoading';

export const CategoryListItems = () => {
  const {
    controls: { status, balanceType },
    list,
  } = useSelector(({ bottomSheet }: IStore) => bottomSheet);

  if (list.length === 0) {
    const type = balanceType === 'INCOME' ? '"Ganhos"' : '"Despesas"';
    const message = `Não há categoria do tipo \n${type}\nclick no icone abaixo para criar uma nova categoria`;
    return <EmptyCategoryList message={message} />;
  }

  if (status === 'loading') {
    return (
      <View>
        <CategoryListLoading />;
      </View>
    );
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
