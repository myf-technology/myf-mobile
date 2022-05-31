import { useNavigation } from '@react-navigation/native';
// import * as Clipboard from 'expo-clipboard';
// import * as Sharing from 'expo-sharing';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Title } from './_Components/Title';
import { ContainerButtons } from './_helper/ContainerButtons';

import { ContainerButton } from '../../../components/ContainerButton';
import { Icon } from '../../../components/Icon';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { height, width } from '../../../constants/responsive';
import { KEY } from '../../../navigation/Private/Pix/Key/constants';
import { PIX } from '../../../navigation/Private/Pix/constants';

export const Keys = () => {
  const { navigate } = useNavigation();
  const [showUp, setShowUp] = useState(false);
  // const [copieText, setCopieText] = useState('');

  // const copyToClipboar = () => {
  // Clipboard.setString('hi');
  // };
  // const fetchCopieText = async () => {
  //   const text = await Clipboard.getStringAsync();
  //   setCopieText(text);
  // };

  // const openShareDialogAsync = async () => {
  //   await Sharing.shareAsync('hello');
  // };

  const onPress = (title: string, text: string) => {
    {
      !showUp ? setShowUp(true) : setShowUp(false);
    }
    switch (title) {
      case 'CHAVE_ALEATORIA':
        setShowUp(false);
        break;

      case 'Celular':
        setShowUp(false);
        navigate(KEY.MOBILE as never, { key: 'PHONE' });
        break;

      case 'CPF':
        navigate(KEY.MOBILE as never, { key: 'CPF' });
        // copyToClipboar;
        // console.log(copyToClipboar());
        break;

      case 'Email':
        navigate(KEY.MOBILE as never, { key: 'EMAIL' });
        // copyToClipboar;
        // console.log(copyToClipboar());
        break;

      default:
        break;
    }
  };

  return (
    <View
      style={{
        height: height(100),
        width: width(100),
        alignItems: 'center',
      }}
    >
      <Spacer amount={6} />
      <View style={{ marginRight: width(88) }}>
        {/* through Back button needs implementation */}
        <TouchableOpacity onPress={() => navigate(PIX.AREA as never)}>
          <Icon name="ArrowBack" />
        </TouchableOpacity>
      </View>
      <Spacer amount={6} />
      <Title />
      <Spacer amount={4} />
      {ContainerButtons.map(({ suffix, prefix, title, text }) => (
        <View key={title}>
          <ContainerButton
            onPress={() => onPress(title, text)}
            suffix={suffix}
            prefix={prefix}
          >
            <View style={{ marginTop: text === '' ? height(3) : height(0) }}>
              <Text textAlign="left">{title}</Text>

              <Text textAlign="left">{text}</Text>
            </View>
          </ContainerButton>
          <Spacer amount={2} />
        </View>
      ))}
    </View>
  );
};
