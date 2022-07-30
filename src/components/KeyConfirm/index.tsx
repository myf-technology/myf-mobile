import { useRef, useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { iProps } from './types';

import { Input } from '../Input';
import { WhiteLine } from './_components/WhiteLine';

export const KeyConfirm = ({
  digitOne,
  digitTwo,
  digitThree,
  digitFour,
  onBlur,
  digitOneValue,
  digitTowValue,
  digitThreeValue,
  digitFourValue,
  passwordMode
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
    four: false
  });

  const onFocusOne = () => {
    const newFocused = {
      one: true,
      two: false,
      three: false,
      four: false
    };
    setFocused(newFocused);
  };
  const onFocusTwo = () => {
    const newFocused = {
      one: false,
      two: true,
      three: false,
      four: false
    };
    setFocused(newFocused);
  };
  const onFocusThree = () => {
    const newFocused = {
      one: false,
      two: false,
      three: true,
      four: false
    };
    setFocused(newFocused);
  };

  const onFocusFour = () => {
    const newFocused = {
      one: false,
      two: false,
      three: false,
      four: true
    };
    setFocused(newFocused);
  };

  const handleDigitOne = (value) => {
    digitOne(value);

    if (value.length === 1) {
      refTwo.current.focus();
    } else if (value.length === 0) {
      refOne.current.focus();
    }
  };

  const handleDigitTwo = (value) => {
    digitTwo(value);

    if (value.length === 1) {
      refThree.current.focus();
    } else if (value.length === 0) {
      refOne.current.focus();
    }
  };

  const handleDigitThree = (value) => {
    digitThree(value);

    if (value.length === 1) {
      refFour.current.focus();
    } else if (value.length === 0) {
      refTwo.current.focus();
    }
  };

  const handleDigitFour = (value) => {
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
          noShadow
          value={digitOneValue}
          onFocus={onFocusOne}
          textColor={focused.one ? 'white' : 'grey3'}
          backgroundColor='dark'
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={38}
          textAlign='center'
          refs={refOne}
          onChangeText={handleDigitOne}
          passwordMode={passwordMode}
        />
        <WhiteLine />
      </View>
      <View style={styles.squaredInput}>
        <Input
          noShadow
          value={digitTowValue}
          onFocus={onFocusTwo}
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refOne.current.focus();
            }
          }}
          textColor={focused.two ? 'white' : 'grey3'}
          backgroundColor='dark'
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign='center'
          refs={refTwo}
          onChangeText={handleDigitTwo}
          passwordMode={passwordMode}
        />
        <WhiteLine />
      </View>
      <View style={styles.squaredInput}>
        <Input
          noShadow
          value={digitThreeValue}
          onFocus={onFocusThree}
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refTwo.current.focus();
            }
          }}
          textColor={focused.three ? 'white' : 'grey3'}
          backgroundColor='dark'
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign='center'
          refs={refThree}
          onChangeText={handleDigitThree}
          passwordMode={passwordMode}
        />
        <WhiteLine />
      </View>
      <View style={styles.squaredInput}>
        <Input
          noShadow
          value={digitFourValue}
          onBlur={backOnDigit ? onBlur : ''}
          onFocus={onFocusFour}
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refThree.current.focus(), setBackOnDigit('');
            }
          }}
          textColor={focused.four ? 'white' : 'grey3'}
          backgroundColor='dark'
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign='center'
          refs={refFour}
          onChangeText={handleDigitFour}
          passwordMode={passwordMode}
        />
        <WhiteLine />
      </View>
    </View>
  );
};