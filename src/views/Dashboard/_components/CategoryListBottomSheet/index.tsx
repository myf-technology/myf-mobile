import { View } from 'react-native';
import { Spacer, Text } from '../../../../components';
import BottomSheet from '@gorhom/bottom-sheet';
import { forwardRef, Ref } from 'react';
import { height } from '../../../../constants';
import styles from './styles';
import { ICategoryBottomSheetProps, ICategoryData } from './types';

export const CategoryListBottomSheet = forwardRef(
  ({ onItemPress }: ICategoryBottomSheetProps, ref: Ref<BottomSheet>) => {
    const useSelectorMock: ICategoryData[] = [
      {
        id: '1',
        value: 'Salario mensal',
        balanceType: 'income',
      },
    ];

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
  },
);
