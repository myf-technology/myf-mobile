import { iconNameProp } from '../../../../../components/Icon/types';
import { PAY } from '../../../../../navigation/Private/Pix/Pay/constants';

export default (key: iconNameProp, navigation) => {
  switch (key) {
    case 'QRcode':
      navigation(PAY.READ);
      console.log('QRcode');

      break;
    case 'Pix':
      navigation(PAY.PIX);

      break;

    default:
      break;
  }
};
