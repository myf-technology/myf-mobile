import { WhiteLine } from './_components/WhiteLine';
import { useRef, useState } from 'react';
import { View } from 'react-native';
import { Input } from '../Input';
import { iProps } from './types';
import styles from './styles';

export const KeyConfirm = ({
  digitThree,
  digitFour,
  digitOne,
  digitTwo,
  onBlur,
  digitThreeValue,
  digitFourValue,
  digitOneValue,
  digitTwoValue,
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
          textColor={focused.one ? 'yellow' : 'yellow3'}
          onChangeText={handleDigitOne}
          passwordMode={passwordMode}
          keyboardType={'numeric'}
          backgroundColor="black"
          returnKeyType={'done'}
          value={digitOneValue}
          onFocus={onFocusOne}
          textAlign="center"
          noShadow={true}
          maxLength={1}
          fontSize={30}
          refs={refOne}
          caretHidden
        />
        <WhiteLine color={digitOneValue ? 'yellow' : 'yellow4'} />
      </View>
      <View style={styles.squaredInput}>
        <Input
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refOne.current.focus();
            }
          }}
          textColor={focused.two ? 'yellow' : 'yellow3'}
          onChangeText={handleDigitTwo}
          passwordMode={passwordMode}
          keyboardType={'numeric'}
          backgroundColor="black"
          returnKeyType={'done'}
          value={digitTwoValue}
          onFocus={onFocusTwo}
          textAlign="center"
          noShadow={true}
          fontSize={30}
          maxLength={1}
          refs={refTwo}
          caretHidden
        />
        <WhiteLine color={digitTwoValue ? 'yellow' : 'yellow4'} />
      </View>
      <View style={styles.squaredInput}>
        <Input
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refTwo.current.focus();
            }
          }}
          textColor={focused.three ? 'yellow' : 'yellow3'}
          onChangeText={handleDigitThree}
          passwordMode={passwordMode}
          keyboardType={'numeric'}
          value={digitThreeValue}
          backgroundColor="black"
          onFocus={onFocusThree}
          returnKeyType={'done'}
          textAlign="center"
          noShadow={true}
          refs={refThree}
          maxLength={1}
          fontSize={30}
          caretHidden
        />
        <WhiteLine color={digitThreeValue ? 'yellow' : 'yellow4'} />
      </View>
      <View style={styles.squaredInput}>
        <Input
          onKeyPress={({ nativeEvent: { key: keyValue } }) => {
            if (keyValue === 'Backspace') {
              refThree.current.focus(), setBackOnDigit('');
            }
          }}
          textColor={focused.four ? 'yellow' : 'yellow3'}
          onBlur={backOnDigit ? onBlur : ''}
          onChangeText={handleDigitFour}
          passwordMode={passwordMode}
          keyboardType={'numeric'}
          backgroundColor="black"
          value={digitFourValue}
          returnKeyType={'done'}
          onFocus={onFocusFour}
          textAlign="center"
          noShadow={true}
          refs={refFour}
          maxLength={1}
          fontSize={30}
          caretHidden
        />
        <WhiteLine color={digitFourValue ? 'yellow' : 'yellow4'} />
      </View>
    </View>
  );
};
