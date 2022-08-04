import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { InvisibleInput } from '../../../components/InvisibleInput';
import MaskInput, { Masks } from 'react-native-mask-input';
import { width } from '../../../constants/responsive';
import Describe from '../_components/Category/index';
import { Spacer } from '../../../components/Spacer';
import { Button } from '../../../components/Button';
import { Icon } from '../../../components/Icon';
import Colors from '../../../constants/Colors';
import { SetStateAction } from 'react';
import styles from '../styles';

interface OutgoesProps {
  onChangeOutText: (masked: any, unmasked: any) => void;
  onChangeDate: (text: SetStateAction<boolean>) => void;
  onDescriptionFocus: () => void;
  onDiscribeOutPress: () => void;
  onArrowOutPress: () => void;
  dateValue: string | boolean;
  outGoesDescription: string;
  categoryOutChosen: string;
  showOutButton: boolean;
  onSendOut: () => void;
  amountChosen: boolean;
  onPress?: () => void;
  outGoesvalue: string;
  description: boolean;
  loading: boolean;
  arrow: boolean;
}

export const Outgoes = ({
  onDiscribeOutPress,
  onDescriptionFocus,
  outGoesDescription,
  categoryOutChosen,
  onChangeOutText,
  onArrowOutPress,
  showOutButton,
  onChangeDate,
  outGoesvalue,
  amountChosen,
  description,
  dateValue,
  onSendOut,
  loading,
  arrow
}: OutgoesProps) => {
  return (
    <View
      style={{
        width: width(90),
        alignItems: 'flex-end',
        alignSelf: 'flex-end'
      }}
    >
      <Describe content={categoryOutChosen} color={Colors.yellow3} onPress={onDiscribeOutPress} />
      <Spacer amount={2} />
      <View>
        <InvisibleInput
          style={{ ...styles.inputMask, color: Colors.yellow3, fontSize: width(4) }}
          placeholder={
            Date().split(' ')[2] + ' ' + Date().split(' ')[1] + ' ' + Date().split(' ')[3]
          }
          autoFocus={false}
          value={dateValue}
          onChangeText={onChangeDate}
        />
      </View>
      {amountChosen ? (
        <MaskInput
          placeholderTextColor={Colors.grey}
          style={{ ...styles.inputMask, color: Colors.yellow3 }}
          placeholder='R$ 0,00'
          value={outGoesvalue}
          onChangeText={onChangeOutText}
          mask={Masks.BRL_CURRENCY}
        />
      ) : null}
      {arrow ? (
        <TouchableOpacity onPress={onArrowOutPress} style={styles.arrow}>
          <Icon name='ArrowForward' fill='yellow3' />
        </TouchableOpacity>
      ) : null}
      {description ? (
        <InvisibleInput
          value={outGoesDescription}
          multiline
          onFocus={onDescriptionFocus}
          numberOfLines={10}
          noShadow={true}
          placeholder='Some description...'
        />
      ) : null}
      {showOutButton ? <Button onPress={onSendOut} title='Send    √' theme='red' /> : null}
      {loading ? (
        <ActivityIndicator
          size={'large'}
          style={{ marginTop: width(10), marginRight: width(38) }}
          color={Colors.yellow3}
        />
      ) : null}
    </View>
  );
};
