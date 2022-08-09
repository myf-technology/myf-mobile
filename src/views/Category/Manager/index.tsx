import { InvisibleInput } from '../../../components/InvisibleInput';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { EarnigList } from './_components/CategoryList/EarnigList';
import { TouchableOpacity, View } from 'react-native';
import { width } from '../../../constants/responsive';
import { Spacer } from '../../../components/Spacer';
import { earningList } from './_help/earningList';
import { Icon } from '../../../components/Icon';
import { Text } from '../../../components/Text';
import { NewCategory } from './_components/NewCategory';

export const CategoryManager = () => {
  return (
    <PageLayout pageTitle='Categorias'>
      <Spacer amount={15} />
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
          <NewCategory />
        </View>
      </View>
    </PageLayout>
  );
};
