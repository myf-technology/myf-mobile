import { PIX } from '../../../../navigation/Private/Pix/constants';
import { containerButtonsKeys } from '../types';

export default (
  navigate: (route: never) => void,
  key: containerButtonsKeys
) => {
  switch (key) {
    case 'PIX_KEY_READ':
      navigate(PIX.KEYS as never);
      break;

    case 'PIX_LIMIT_READ':
      navigate(PIX.LIMIT as never);
      break;

    default:
      break;
  }
};
