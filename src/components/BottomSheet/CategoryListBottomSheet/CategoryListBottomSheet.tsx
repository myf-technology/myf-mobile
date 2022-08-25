import BottomSheet from '@gorhom/bottom-sheet';
import { useEffect, useRef } from 'react';
import { height } from '../../../constants';
import { ICategoryBottomSheetProps } from './types';
import { useSelector } from 'react-redux';
import { IStore } from '../../../store/types';
import { useAsyncDispatch } from '../../../hooks/useAsyncDispatch';

import styles from './styles';
import { CategoryListItems } from './_components/CategoryListItems';
import { bottomSheetControl } from './store/slice';

export const CategoryListBottomSheet = ({}: ICategoryBottomSheetProps) => {
  const dispatch = useAsyncDispatch();
  const ref = useRef<BottomSheet>(null);
  const {
    controls: { visible },
  } = useSelector(({ bottomSheet }: IStore) => bottomSheet);

  const onChange = (index: number) => {
    const isOpened = !!index;

    isOpened || dispatch(bottomSheetControl({ visible: false }));
  };

  useEffect(() => {
    visible ? ref.current?.snapToIndex(1) : ref.current?.snapToIndex(0);
  }, [visible]);

  return (
    <BottomSheet
      {...{ onChange }}
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
      ref={ref}
      snapPoints={[height(0.01), height(40)]}>
      <CategoryListItems />
    </BottomSheet>
  );
};
