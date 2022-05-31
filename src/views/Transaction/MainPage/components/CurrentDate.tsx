import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Text } from '../../../../components/Text';

export const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const min = new Date().getMinutes();

    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + 'h' + ':' + min + 'm'
    );
  }, []);
  return (
    <View>
      <Text>{currentDate}</Text>
    </View>
  );
};
