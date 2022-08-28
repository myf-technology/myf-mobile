import BottomSheet from '@gorhom/bottom-sheet';
import { useEffect, useRef } from 'react';
import { CreateCategoryModalProps } from './types';

import style from './style';
import { height } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../../store/types';
import { ManageCategoryLoading } from './components/ManageCategoryLoading';
import { ManageCategory } from './components/ManageCategory';
import { manageCategoryBottomSheetControl } from './store/slice';

export const ManageCategoryBottomSheet = ({
  onPress,
}: CreateCategoryModalProps) => {
  const ref = useRef<BottomSheet>(null);

  const {
    controls: { visible, status },
  } = useSelector(
    ({ manageCategoryBottomSheet }: IStore) => manageCategoryBottomSheet,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    ref.current?.snapToIndex(+visible);
  }, [visible]);

  const onChange = (index: number) => {
    const isOpened = !!index;

    isOpened || dispatch(manageCategoryBottomSheetControl({ visible: false }));
  };

  return (
    <BottomSheet
      {...{ ref, onChange }}
      handleStyle={style.handleStyle}
      backgroundStyle={style.backgroundStyle}
      snapPoints={[height(0.01), height(80)]}>
      {status === 'pending' ? (
        <ManageCategoryLoading />
      ) : (
        <ManageCategory {...{ onPress }} />
      )}
    </BottomSheet>
  );
};
