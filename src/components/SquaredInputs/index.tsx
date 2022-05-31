import { createRef, useRef, useState } from 'react';
import { View } from 'react-native';

import { SquaredInput } from './_components/SquaredInput';
import { controlSquaredInputs } from './_helpers/controlSquaredInputs';
import styles from './styles';

import { Input } from '../Input';

export const SquaredInputs = () => {
  const refOne = useRef();
  const refTwo = useRef();
  const refThree = useRef();
  const refFour = useRef();
  const [form, setForm] = useState([
    {
      focused: false,
      value: '',
      ref: createRef(),
    },
    {
      focused: false,
      value: '',
      ref: createRef(),
    },
    {
      focused: false,
      value: '',
      ref: createRef(),
    },
    {
      focused: false,
      value: '',
      ref: createRef(),
    },
  ]);

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

    if (value.length === 1) {
      return;
    } else if (value.length === 0) {
      refThree.current.focus();
    }
  };

  const onChangeText = (ref) => {
    console.log(ref);
  };
  const onFocus = () => {};

  return (
    <View style={styles.container}>
      {form.map(({ focused, value, ref }) => (
        <SquaredInput
          key={Math.random()}
          onFocus={onFocus}
          refs={ref}
          onChangeText={() => onChangeText(ref)}
        />
      ))}

      {/* <View style={styles.squaredInput}>
        <Input  
          onFocus={onFocusOne}
          textColor={focused.one ? 'white' : 'dark'}
          backgroundColor={focused.one ? 'dark' : 'white'}
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign="center"
          refs={refOne}
          onChangeText={handleDigitOne}
        />
      </View> */}

      {/* <View style={styles.squaredInput}>
        <Input
          onFocus={onFocusTwo}
          textColor={focused.two ? 'white' : 'dark'}
          backgroundColor={focused.two ? 'dark' : 'white'}
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign="center"
          refs={refTwo}
          onChangeText={handleDigitTwo}
        />
      </View>
      <View style={styles.squaredInput}>
        <Input
          onFocus={onFocusThree}
          textColor={focused.three ? 'white' : 'dark'}
          backgroundColor={focused.three ? 'dark' : 'white'}
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign="center"
          refs={refThree}
          onChangeText={handleDigitThree}
        />
      </View>
      <View style={styles.squaredInput}>
        <Input
          onFocus={onFocusFour}
          textColor={focused.four ? 'white' : 'dark'}
          backgroundColor={focused.four ? 'dark' : 'white'}
          caretHidden
          returnKeyType={'done'}
          maxLength={1}
          keyboardType={'numeric'}
          fontSize={30}
          textAlign="center"
          refs={refFour}
          onChangeText={handleDigitFour}
        />
      </View> */}
    </View>
  );
};
