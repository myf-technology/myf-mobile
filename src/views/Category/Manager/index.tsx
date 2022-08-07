import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../components/Icon';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import Colors from '../../../constants/Colors';
import { width } from '../../../constants/responsive';
import { EarnigList } from './_components/CategoryList/EarnigList';
import { earningList } from './_help/earningList';

export const CategoryManager = () => {
  return (
    <PageLayout pageTitle='Categorias'>
      <Spacer amount={10} />
      <Spacer amount={10} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Spacer amount={4} />
          {earningList.map(({ title, averangeAmount, averangeDate, description, id }, index) => (
            <EarnigList
              onGearPress={() => {
                console.log('gear');
              }}
              onTrashPress={() => {
                console.log('trash');
              }}
              key={index}
              EarningCategory={title}
              averangeAmount={averangeAmount}
              averangeDate={averangeDate}
              description={description}
              id={id}
            />
          ))}
          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='PlusSign' fill='white' />
              <Text style={{ marginLeft: width(2) }} color='white'>
                Nova categoria
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </PageLayout>
  );
};
