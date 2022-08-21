import { View } from 'react-native';
import { useState } from 'react';

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Register>
        <Input value={state} onChangeText={setState} />
      </Register>
    </View>
  );
};
