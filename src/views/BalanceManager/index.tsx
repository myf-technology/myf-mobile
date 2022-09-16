/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Layout, Spacer, Text } from '../../components';
import { Colors, width } from '../../constants';
import { BalanceInself } from './_component/BalanceInself';
import { FilterIcons } from './_component/FilterIcons';
import { Item } from './_component/Item';
import { Filters } from './_helpers/Filters';
import { Items } from './_helpers/Items';
import styles from './styles';
import { useSelector } from 'react-redux';
import { useAsyncDispatch } from '../../hooks/useAsyncDispatch';
import { useEffect } from 'react';
import { fetchBalanceList } from './store/slice';

export const BalanceManager = () => {
  const dispatch = useAsyncDispatch();
  const store = useSelector((state: any) => {
    return state.balanceManager;
  });

  useEffect(() => {
    dispatch(fetchBalanceList());
  }, [dispatch]);

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

  if (store.controls.state === 'rejected') {
    return (
      <Layout>
        <Text>{store.controls.message}</Text>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Balance Managements">
      <ScrollView>
        <Spacer amount={2} />
        <BalanceInself
          date={moment().format('MMMM-YYYY')}
          freeAmount={123.0}
          received={3000.0}
          expenses={123.0}
        />
        <Spacer amount={2} />
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
          {store.balanceList.map(balanceList => (
            <View key={balanceList.balanceListId}>
              <Text>
                {moment(balanceList.balanceMonth).format('MMMM-YYYY')}
              </Text>
              {balanceList.data.map(
                ({
                  name,
                  amount,
                  balanceDay,
                  balanceType,
                  description,
                  balanceId,
                }) => (
                  <Item
                    name={name}
                    amount={amount}
                    balanceDay={balanceDay}
                    balanceType={balanceType}
                    description={description}
                    key={balanceId}
                  />
                ),
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <Icon
        style={{ position: 'absolute', bottom: 15, alignSelf: 'center' }}
        name="download-outline"
        width={40}
        height={40}
        fill={Colors.white}
      />
    </Layout>
  );
};
