import { render } from '@testing-library/react-native';
import * as React from 'react';

import { Text } from '..';
import Colors from '../../../constants/Colors';
import { FontSize, Font, FontWeight } from '../../../constants/Typography';

describe('<Text />', () => {
  it(`should render component correctly`, () => {
    const { toJSON } = render(
      <Text color={Colors.dark} font={Font.title2}>
        test children
      </Text>
    );

    expect(toJSON()).toBeTruthy();
  });

  it('should render children', () => {
    const testText = 'test children';

    const { toJSON } = render(
      <Text color={Colors.dark} font={Font.title2}>
        {testText}
      </Text>
    );

    const children = toJSON().children[0];

    expect(children).toEqual(testText);
  });
  it('should render with correct font style', () => {
    const testText = 'test children';

    const textStyleTest = [
      {
        font: Font.title2,
        fontSize: FontSize.title2,
        fontWeight: FontWeight.bold,
      },
      {
        font: Font.title3,
        fontSize: FontSize.title3,
        fontWeight: FontWeight.bold,
      },
      {
        font: Font.body,
        fontSize: FontSize.body,
        fontWeight: FontWeight.bold,
      },
      {
        font: Font.callout,
        fontSize: FontSize.body,
        fontWeight: FontWeight.normal,
      },
      {
        font: Font.subhead,
        fontSize: FontSize.subhead,
        fontWeight: FontWeight.bold,
      },
      {
        font: Font.footnote,
        fontSize: FontSize.subhead,
        fontWeight: FontWeight.normal,
      },
    ];

    textStyleTest.forEach((el) => {
      const { toJSON } = render(
        <Text color={Colors.dark} font={el.font}>
          {testText}
        </Text>
      );

      const testStyle = toJSON().props.style[1];

      expect(testStyle.fontSize).toEqual(el.fontSize);

      if (testStyle.fontWeight) {
        expect(testStyle.fontWeight).toEqual(el.fontWeight);
      }
    });
  });

  it('should render with correct color', () => {
    const testText = 'test children';

    for (const key in Colors) {
      const wrapper = render(
        <Text color={Colors[key]} font={Font.title2}>
          {testText}
        </Text>
      );

      const wrapperColor = wrapper.toJSON().props.style[2].color;

      expect(wrapperColor).toBe(Colors[key]);
    }
  });
});
