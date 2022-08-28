import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { IStore } from '../../../../../../../store/types';
import { Spacer } from '../../../../../../Spacer';
import { Text } from '../../../../../../Text';
import styles from './styles';

export const CreateCategoryError = () => {
  const {
    controls: { message },
  } = useSelector(({ bottomSheet }: IStore) => bottomSheet);

  return (
    <View style={styles.container}>
      <Spacer amount={3} />
      <Text typography="subhead">{message}</Text>
    </View>
  );
};
