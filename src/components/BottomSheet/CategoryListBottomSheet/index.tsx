import { View } from 'react-native';
import { Spacer, Text } from '../..';
import BottomSheet from '@gorhom/bottom-sheet';
import { useEffect, useRef } from 'react';
import { height } from '../../../constants';
import styles from './styles';
import { ICategoryBottomSheetProps, ICategoryData } from './types';
import { useSelector } from 'react-redux';
import { IStore } from '../../../store/types';
import { bottomSheetControl } from './store/slice';
import { fetchCategoryListThunk } from './store/actions';
import { useAsyncDispatch } from '../../../hooks/useAsyncDispatch';

export const CategoryListBottomSheet = ({}: ICategoryBottomSheetProps) => {
  const dispatch = useAsyncDispatch();
  const ref = useRef<BottomSheet>(null);
  const { visible } = useSelector(
    ({ bottomSheet }: IStore) => bottomSheet.controls,
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
      onChange={index => {
        const isOpening = !!index;

        isOpening
          ? dispatch(fetchCategoryListThunk())
          : dispatch(bottomSheetControl({ visible: false }));
      }}
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
      ref={ref}
      snapPoints={[height(0.01), height(40)]}>
      <View style={styles.itemsContainer}>
        {useSelectorMock.map(({ id, value, balanceType }) => (
          <View key={id}>
            <Text
              typography="footnote"
              // onPress={() => onItemPress({ id, value, balanceType })}
            >
              {value}
            </Text>
            <Spacer amount={1} />
          </View>
        ))}
      </View>
    </BottomSheet>
  );
};
