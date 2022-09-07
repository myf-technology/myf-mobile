/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Layout, Spacer, Text } from '../../components';
import { Colors, width } from '../../constants';
import styles from './styles';
import { FilterIcons } from './_component/FilterIcons';
import { Item } from './_component/Item';
import { Filters } from './_helpers/Filters';
import { Items } from './_helpers/Items';

export const BalanceManager = () => {
  const onIconPress = name => {
    console.log(name);
  };

  const search = () => (
    <Icon
      style={{ right: width(10), top: width(4) }}
      name="search-outline"
      width={25}
      height={25}
      fill={Colors.grey}
      onPress={() => {
        console.log('search');
      }}
    />
  );

  return (
    <Layout pageTitle="Balance Managements">
      <ScrollView>
        <Spacer amount={8} />
        <View style={{ alignSelf: 'center' }}>
          <Input
            suffixIcon={search}
            style={styles.input}
            placeholder="Fitrar por..."
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {Filters.map(({ icon, name }) => (
              <FilterIcons
                onPress={() => onIconPress(name)}
                key={icon}
                icon={icon}
                name={name}
              />
            ))}
          </View>
        </View>
        <Spacer amount={6} />
        <View
          style={{
            width: width(90),
            alignSelf: 'center',
          }}>
          <Text color="yellow2">Agosto 2022</Text>

          {Items.map(
            ({ iconIndicator, categoryName, balanceAmount, eventDate }) => (
              <View>
                <Spacer amount={2} />

                <Item
                  iconIndicator={iconIndicator}
                  categoryName={categoryName}
                  balanceAmount={balanceAmount}
                  eventDate={eventDate < 10 ? `0${eventDate}` : eventDate}
                />
              </View>
            ),
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};
