import React from 'react';
import { View } from 'react-native';

import { ContainerButton } from '../../../../components/ContainerButton';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import styles from '../Styles';
import { CardContainers } from '../_helpers/CardContainers';

export const CardContainer = ({ onPress }) => (
  <View>
    {CardContainers.map(({ prefix, suffix, titleText, text }) => (
      <View key={titleText} style={styles.containerButtons}>
        <ContainerButton onPress={onPress} suffix={suffix} prefix={prefix}>
          <View
            style={
              text === ''
                ? styles.functionContainerTitle
                : styles.functionContainer
            }
          >
            <Text textAlign="left">{titleText}</Text>
            <Spacer amount={1} />
            <Text font="subhead" textAlign="left">
              {text}
            </Text>
          </View>
        </ContainerButton>
        <Spacer amount={1} />
      </View>
    ))}
    <Spacer amount={16} />
  </View>
);
