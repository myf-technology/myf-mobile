import { iconTypes } from '../../../../components/IconButton/types';
import { WALLET } from '../../../../navigation/Private/Dashboard/Wallet/constants';

export default (key: iconTypes, navigation) => {
  switch (key) {
    case 'withdraw':
      navigation(WALLET.WITHDRAW);
      break;
    case 'pix':
      navigation(WALLET.PIX);
      break;
    case 'QRcode':
      navigation(WALLET.QRCODE);
      break;

    default:
      break;
  }
};
