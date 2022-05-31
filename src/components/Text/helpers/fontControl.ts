import { TextStyle } from 'react-native';

import { Font, fontType } from '../../../constants/Typography';

const fontControl = (
  font: fontType,
  styles: { [style: string]: TextStyle }
): TextStyle => {
  switch (font) {
    case Font[font]:
      return styles[font];

    default:
      return styles.body;
  }
};

export default fontControl;
