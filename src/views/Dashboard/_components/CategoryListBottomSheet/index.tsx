import { View } from 'react-native';
import { Spacer, Text } from '../../../../components';
import BottomSheet from '@gorhom/bottom-sheet';
import { useEffect, useRef } from 'react';
import { height } from '../../../../constants';
import styles from './styles';
import { ICategoryBottomSheetProps, ICategoryData } from './types';
import { useSelector } from 'react-redux';
import { IStore } from '../../../../store/types';

export const CategoryListBottomSheet = ({
  onItemPress,
}: ICategoryBottomSheetProps) => {
  const ref = useRef<BottomSheet>(null);
  const { visible } = useSelector(
    (store: IStore) => store.bottomSheet.controls,
  );
  const useSelectorMock: ICategoryData[] = [
    {
      id: '1',
      value: 'Salario mensal',
      balanceType: 'income',
    },
  ];

  useEffect(() => {
    visible ? ref.current?.snapToIndex(1) : ref.current?.snapToIndex(0);
  }, [visible]);

  return (
    <BottomSheet
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
      ref={ref}
      snapPoints={[height(0.01), height(40)]}>
      <View style={styles.itemsContainer}>
        {useSelectorMock.map(({ id, value, balanceType }) => (
          <View key={id}>
            <Text
              typography="footnote"
              onPress={() => onItemPress({ id, value, balanceType })}>
              {value}
            </Text>
            <Spacer amount={1} />
          </View>
        ))}
      </View>
    </BottomSheet>
  );
};
