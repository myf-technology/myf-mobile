import { Theme } from '../types';

const textColorMapper = (theme: string) => {
  const textColorMap = {
    [Theme.yellow]: 'dark',
    [Theme.dark]: 'white',
    [Theme.transparent]: 'white',
    [Theme.disabled]: 'white',
    [Theme.red]: 'white',
    [Theme.green]: 'white',
  };

  return textColorMap[theme];
};

export default textColorMapper;
