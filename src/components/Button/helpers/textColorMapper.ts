import { Theme } from '../types';

const textColorMapper = (theme: string) => {
  const textColorMap = {
    [Theme.yellow]: 'dark',
    [Theme.dark]: 'yellow3',
    [Theme.transparent]: 'yellow3',
    [Theme.disabled]: 'white',
    [Theme.red]: 'white',
    [Theme.green]: 'green',
    [Theme.white]: 'yellow4',
    [Theme.red]: 'red'
  };

  return textColorMap[theme];
};

export default textColorMapper;
