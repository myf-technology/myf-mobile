import moment from 'moment';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Throwback } from './_components/Throwback';
import { TopBar } from './_components/TopBar';
import data from './_helpers/data';

import DollarSeparator from '../../components/Assets/DollarSeparator';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import Colors from '../../constants/Colors';
import { width } from '../../constants/responsive';
import { getStatmentAPI } from '../../services/statement';

export const Statement = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('February');

  const asd = moment().month('February').format('YYYY-MM-DD');
  const startOfMonth = moment(asd).startOf('month').format('YYYY-MM-DD');
  const endOfMonth = moment(asd).endOf('month').format('YYYY-MM-DD');

  useEffect(() => {
    (async () => {
      const res = await getStatmentAPI(startOfMonth, endOfMonth);
      console.log(res);
    })();
  });

  return (
    <SafeAreaView style={{ backgroundColor: Colors.grey, flex: 1 }}>
      <Throwback />
      <TopBar getCurrentIndex={(_, month) => setSelectedMonth(month)} />
      <Spacer amount={2} />
      <View
        style={{
          width: width(90),
          alignSelf: 'center',
        }}
      >
        <Text color='white' font="title" textAlign="left">
          Extrato
        </Text>
        <Spacer amount={2} />
        <Text color={Colors.white} textAlign="left">
          Acompanhe suas atividades dentro do app
        </Text>
        <Spacer amount={2} />

        {data.map(({ timestamp, statements }) => {
          const isSelectedMonth =
            moment(timestamp).month('MMMM').format('MMMM') === selectedMonth;

          return isSelectedMonth ? (
            <View>
              <Text color='grey' textAlign="left" font="subhead">
                {moment(timestamp).format('DD MMM YYYY, HH:mm')}
              </Text>
              <Spacer amount={2} />
              <View
                key={timestamp}
                style={{
                  flexDirection: 'row',
                }}
              >
                <View>
                  {statements.map(({ description, from, amount, id }) => (
                    <View key={id}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: width(75),
                        }}
                      >
                        <DollarSeparator />
                        <View
                          style={{
                            width: width(65),
                            alignSelf: 'center',
                          }}
                        >
                          <View>
                            <Text color='grey' textAlign="left" font="body">
                              {description}
                            </Text>
                          </View>
                          <View style={{ marginBottom: width(4) }}>
                            <Text color='grey' textAlign="left" font="body">
                              {from}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            marginLeft: width(65),
                            marginTop: width(6),
                            position: 'absolute',
                          }}
                        >
                          <Text color='white' textAlign="left" font="body">
                            {amount}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ) : null;
        })}
      </View>
    </SafeAreaView>
  );
};
