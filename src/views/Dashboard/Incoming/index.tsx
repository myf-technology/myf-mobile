/* eslint-disable react-native/no-inline-styles */
import { ActivityIndicator, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import Describe from '../_components/CreateBalanceForm/index';
import { Spacer } from '../../../components/Spacer';
import { SetStateAction } from 'react';
import styles from '../styles';
import moment from 'moment';
import { Colors, width } from '../../../constants';
import { Input } from '../../../components';
import { Button } from '../../../components/Button';

interface IncomingProps {
  onDescriptionChanges?: (text: SetStateAction<boolean>) => void;
  onChangeInText: (masked: any, unmasked: any) => void;
  onChangeDate: (masked: any, unmasked: any) => void;
  incomeDescription: string | boolean;
  onDiscribePress: () => void;
  onArrowInPress: () => void;
  categoryInChosen: string;
  amountChosen: boolean;
  showInButton: boolean;
  description: string | boolean;
  onPress?: () => void;
  onSendIn: () => void;
  dateValue: string;
  showDate: string;
  loading: boolean;
  InOut: boolean;
  value: string;
}

export const Incoming = ({
  // onDescriptionChanges,
  // incomeDescription,
  categoryInChosen,
  onDiscribePress,
  onChangeInText,
  amountChosen,
  showInButton,
  onChangeDate,
  description,
  dateValue,
  onSendIn,
  loading,
  value,
  InOut,
}: IncomingProps) => {
  return (
    <View style={{ alignItems: InOut ? 'flex-start' : 'flex-end' }}>
      {!loading ? (
        <>
          <Describe
            content={categoryInChosen}
            color="yellow"
            onPress={onDiscribePress}
          />
          <Spacer amount={1} />
          {amountChosen ? (
            <View>
              <MaskInput
                style={{
                  ...styles.inputMask,
                  color: Colors.grey,
                  fontSize: width(4),
                  alignSelf: InOut ? 'flex-start' : 'flex-end',
                }}
                placeholderTextColor={Colors.grey}
                placeholder={moment().format('DD/MM/YYYY')}
                autoFocus={false}
                value={dateValue}
                onChangeText={onChangeDate}
                mask={Masks.DATE_DDMMYYYY}
              />
              <Spacer amount={1} />
              <MaskInput
                style={{ ...styles.inputMask, color: Colors.yellow }}
                placeholderTextColor={Colors.grey}
                onChangeText={onChangeInText}
                mask={Masks.BRL_CURRENCY}
                placeholder="R$ 0,00"
                value={value}
                autoFocus={true}
              />
              <Spacer amount={1} />
            </View>
          ) : null}
          {description ? (
            <Input
              style={{ color: Colors.grey, fontSize: width(4) }}
              // onChangeText={onDescriptionChanges}
              placeholder="Some description..."
              // value={incomeDescription}
              numberOfLines={10}
              autoFocus={false}
              noShadow={true}
              multiline
            />
          ) : null}
          {showInButton ? (
            <Button
              onPress={onSendIn}
              title="Send    √"
              theme={InOut ? 'green' : 'red'}
            />
          ) : null}
        </>
      ) : (
        <ActivityIndicator
          style={{ margin: 10 }}
          color={Colors.yellow}
          size={'large'}
        />
      )}
    </View>
  );
};
