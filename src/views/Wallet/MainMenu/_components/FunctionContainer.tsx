import React from 'react';
import { View } from 'react-native';

import { ContainerButton } from '../../../../components/ContainerButton';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import styles from '../Styles';
import { FunctionContainers } from '../_helpers/FunctionContainers';

export const FunctionContainer = (props) => (
  <View>
    <Spacer amount={1} />
    {FunctionContainers.map(({ prefix, suffix, titleText, text }, index) => (
      <View key={titleText} style={styles.containerButtons}>
        <ContainerButton
          onPress={() => props.onPress(index)}
          suffix={suffix}
          prefix={prefix}
        >
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
    <Spacer amount={1} />
  </View>
);
