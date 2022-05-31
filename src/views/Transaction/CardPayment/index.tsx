import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Head } from './_component/Head';
import { TicketInfo } from './_component/TicketInfo';
import { containerButtons } from './_helper/containerButtons';
import { ticketInfos } from './_helper/ticketInfos';
import styles from './styles';

import { Button } from '../../../components/Button';
import { ContainerButton } from '../../../components/ContainerButton';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { height } from '../../../constants/responsive';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const CardPayment = () => {
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );
  const bottomSheetRef = useRef<bottomSheet>(null);
  const onPress = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  return (
    <>
      <RegisterLayout>
        <Head price="25,55" />

        {ticketInfos.map(({ title, content }) => (
          <View key="title">
            <TicketInfo title={title} content={content} />
            <Spacer amount={1} />
          </View>
        ))}
        <Spacer amount={2} />
        {containerButtons.map(({ prefix, suffix, title, content }) => (
          <View key={prefix}>
            <ContainerButton onPress={() => ''} prefix={prefix} suffix={suffix}>
              <View style={content === '' ? styles.containerText : null}>
                <Text textAlign="left">{title}</Text>
                <Text font="subhead" textAlign="left">
                  {content}
                </Text>
              </View>
            </ContainerButton>
            <Spacer amount={2} />
          </View>
        ))}
        <Spacer amount={5} />
        <Button onPress={onPress} title="Pagar" />
      </RegisterLayout>
      <GestureHandlerRootView>
        <BottomSheet
          ref={bottomSheetRef}
          backdropComponent={renderBackdrop}
          snapPoints={[height(1), height(40)]}
        >
          <Text>meu ovo</Text>
        </BottomSheet>
      </GestureHandlerRootView>
    </>
  );
};
