import React, { useState } from 'react';

export const Selector = (prices, selectors) => {
  const [selectors, setSelectors] = useState('selectorOff');

  switch (prices) {
    case '10,00':
      setSelectors('selectorOn');
      break;

    default:
      break;
  }
};
