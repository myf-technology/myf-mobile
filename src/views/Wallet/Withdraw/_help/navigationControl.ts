import { iconNameProp } from '../../../../components/Icon/types';
import { WITHDRAW } from '../../../../navigation/Private/Dashboard/Wallet/Withdraw/constants';

export default (key: iconNameProp, navigation) => {
  switch (key) {
    case 'Transfer':
      navigation(WITHDRAW.ACCOUNT);
      break;
    case 'QRcode':
      navigation(WITHDRAW.PIX);
      break;

    default:
      break;
  }
};
