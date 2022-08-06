import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { InvisibleInput } from '../../../components/InvisibleInput';
import MaskInput, { Masks } from 'react-native-mask-input';
import { width } from '../../../constants/responsive';
import Describe from '../_components/Category/index';
import { Spacer } from '../../../components/Spacer';
import { Button } from '../../../components/Button';
import Colors from '../../../constants/Colors';
import { SetStateAction } from 'react';
import styles from '../styles';
import moment from 'moment';

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
  description: boolean;
  onPress?: () => void;
  onSendIn: () => void;
  dateValue: string;
  showDate: string;
  loading: boolean;
  InOut: boolean;
  value: string;
}

export const Incoming = ({
  onDescriptionChanges,
  incomeDescription,
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
  InOut
}: IncomingProps) => {
  return (
    <View style={{ alignItems: InOut ? 'flex-start' : 'flex-end' }}>
      <Describe content={categoryInChosen} color={Colors.yellow3} onPress={onDiscribePress} />
      <Spacer amount={1} />
      {amountChosen ? (
        <View>
          <MaskInput
            style={{
              ...styles.inputMask,
              color: Colors.grey3,
              fontSize: width(4),
              alignSelf: InOut ? 'flex-start' : 'flex-end'
            }}
            placeholderTextColor={Colors.grey2}
            placeholder={moment().format('DD/MM/YYYY')}
            autoFocus={false}
            value={dateValue}
            onChangeText={onChangeDate}
            mask={Masks.DATE_DDMMYYYY}
          />
          <Spacer amount={1} />
          <MaskInput
            style={{ ...styles.inputMask, color: Colors.yellow3 }}
            placeholderTextColor={Colors.grey}
            onChangeText={onChangeInText}
            mask={Masks.BRL_CURRENCY}
            placeholder='R$ 0,00'
            value={value}
            autoFocus={true}
          />
          <Spacer amount={1} />
        </View>
      ) : null}
      {description ? (
        <InvisibleInput
          style={{ color: Colors.grey3, fontSize: width(4) }}
          onChangeText={onDescriptionChanges}
          placeholder='Some description...'
          value={incomeDescription}
          numberOfLines={10}
          autoFocus={false}
          noShadow={true}
          multiline
        />
      ) : null}
      {showInButton ? (
        <Button onPress={onSendIn} title='Send    √' theme={InOut ? 'green' : 'red'} />
      ) : null}
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: width(10) }}
          color={Colors.yellow3}
          size={'large'}
        />
      ) : null}
    </View>
  );
};
