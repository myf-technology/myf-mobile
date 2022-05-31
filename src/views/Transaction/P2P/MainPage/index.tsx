import { View } from 'react-native';

import { Title } from './_components/Title';
import { ContainerButtons } from './_helpers/ContainerButtons';

import { ContainerButton } from '../../../../components/ContainerButton';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';

export const P2P = () => (
  <View style={{ alignItems: 'center' }}>
    <Title />
    <Spacer amount={2} />
    {ContainerButtons.map(({ prefix, suffix, titleText, text }) => (
      <ContainerButton key={prefix} prefix={prefix} suffix={suffix}>
        <Text textAlign="left" font="subhead">
          {titleText}
        </Text>
        <Text textAlign="left">{text}</Text>
      </ContainerButton>
    ))}
  </View>
);
