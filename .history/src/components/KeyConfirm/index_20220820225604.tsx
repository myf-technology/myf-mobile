import { View } from 'react-native';

import styles from './styles';
import { iProps } from './types';

import { Input } from '../Input';
import { WhiteLine } from './_components/WhiteLine';
import Colors from '../../constants/Colors';
import { useRef, useState } from 'react';

export const KeyConfirm = ({
  digitOne,
  digitTwo,
  digitThree,
  digitFour,
  onBlur,
  digitOneValue,
  digitTwoValue,
  digitThreeValue,
  digitFourValue,
  passwordMode,
}: iProps) => {
  const refOne = useRef();
  const refTwo = useRef();
  const refThree = useRef();
  const refFour = useRef();
  const [backOnDigit, setBackOnDigit] = useState('');
  const [focused, setFocused] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const onFocusOne = () => {
    const newFocused = {
      one: true,
      two: false,
      three: false,
      four: false,
    };
    setFocused(newFocused);
  };
  const onFocusTwo = () => {
    const newFocused = {
      one: false,
      two: true,
      three: false,
      four: false,
    };
    setFocused(newFocused);
  };
  const onFocusThree = () => {
    const newFocused = {
      one: false,
      two: false,
      three: true,
      four: false,
    };
    setFocused(newFocused);
  };

  const onFocusFour = () => {
    const newFocused = {
      one: false,
      two: false,
      three: false,
      four: true,
    };
    setFocused(newFocused);
  };

  const handleDigitOne = value => {
    digitOne(value);

    if (value.length === 1) {
      refTwo.current.focus();
    } else if (value.length === 0) {
      refOne.current.focus();
    }
  };

  const handleDigitTwo = value => {
    digitTwo(value);

    if (value.length === 1) {
      refThree.current.focus();
    } else if (value.length === 0) {
      refOne.current.focus();
    }
  };

  const handleDigitThree = value => {
    digitThree(value);

    if (value.length === 1) {
      refFour.current.focus();
    } else if (value.length === 0) {
      refTwo.current.focus();
    }
  };

  const handleDigitFour = value => {
    digitFour(value);
    setBackOnDigit('onBlur');

    if (value.length === 1) {
      refFour.current.blur();
      return;
    } else if (value.length === 0) {
      refThree.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.squaredInput}>
        <Input
          noShadow={true}
          value={digitOneValue}
          onFocus={onFocusOne}
          textColor={focused.one ? 'yellow' : 'yellow3'}
          backgroundColor="black"
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign="center"
          refs={refOne}
          onChangeText={handleDigitOne}
          passwordMode={passwordMode}
        />
        <WhiteLine color={digitOneValue ? 'yellow' : 'yellow4'} />
      </View>
      <View style={styles.squaredInput}>
        <Input
          noShadow={true}
          value={digitTwoValue}
          onFocus={onFocusTwo}
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refOne.current.focus();
            }
          }}
          textColor={focused.two ? 'yellow' : 'yellow3'}
          backgroundColor="black"
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign="center"
          refs={refTwo}
          onChangeText={handleDigitTwo}
          passwordMode={passwordMode}
        />
        <WhiteLine color={digitTwoValue ? 'yellow' : 'yellow4'} />
      </View>
      <View style={styles.squaredInput}>
        <Input
          noShadow={true}
          value={digitThreeValue}
          onFocus={onFocusThree}
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refTwo.current.focus();
            }
          }}
          textColor={focused.three ? 'yellow' : 'yellow3'}
          backgroundColor="black"
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign="center"
          refs={refThree}
          onChangeText={handleDigitThree}
          passwordMode={passwordMode}
        />
        <WhiteLine color={digitThreeValue ? 'yellow' : 'yellow4'} />
      </View>
      <View style={styles.squaredInput}>
        <Input
          noShadow={true}
          value={digitFourValue}
          onBlur={backOnDigit ? onBlur : ''}
          onFocus={onFocusFour}
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refThree.current.focus(), setBackOnDigit('');
            }
          }}
          textColor={focused.four ? 'yellow' : 'yellow3'}
          backgroundColor="black"
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign="center"
          refs={refFour}
          onChangeText={handleDigitFour}
          passwordMode={passwordMode}
        />
        <WhiteLine color={digitFourValue ? 'yellow' : 'yellow4'} />
      </View>
    </View>
  );
};
