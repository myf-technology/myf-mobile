import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export default () => {
  const [extraMargin, setExtraMargin] = useState(0);

  useEffect(() => {
    const willShow = ({
      endCoordinates: { height },
    }: {
      endCoordinates: { height: number };
    }) => {
      setExtraMargin(height);
    };

    const willHide = () => {
      setExtraMargin(0);
    };

    Keyboard.addListener('keyboardWillShow', willShow);
    Keyboard.addListener('keyboardWillHide', willHide);

    return () => {
      Keyboard.removeAllListeners('KeyboardWillShow');
      Keyboard.removeAllListeners('KeyboardWillHide');
    };
  }, []);

  return extraMargin;
};
