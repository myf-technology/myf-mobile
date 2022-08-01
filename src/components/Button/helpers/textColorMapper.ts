import { Theme } from '../types';

const textColorMapper = (theme: string) => {
  const textColorMap = {
    [Theme.yellow]: 'dark',
    [Theme.dark]: 'yellow3',
    [Theme.transparent]: 'yellow3',
    [Theme.disabled]: 'white',
    [Theme.red]: 'white',
    [Theme.green]: 'white',
    [Theme.white]: 'yellow4'
  };

  return textColorMap[theme];
};

export default textColorMapper;
