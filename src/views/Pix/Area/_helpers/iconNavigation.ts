import { PIX } from '../../../../navigation/Private/Pix/constants';
import { iconButtonsKeys } from '../types';

export default (navigate: (route: never) => void, key: iconButtonsKeys) => {
  switch (key) {
    case 'PIX_PAY_READ':
      navigate(PIX.PAY as never);
      break;
    case 'PIX_TRANSFER':
      navigate(PIX.TRANSFER as never);
      break;
    case 'RECEIVE_VIEW':
      navigate(PIX.RECEIVE as never);
      break;

    default:
      break;
  }
};
