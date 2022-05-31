import { QUESTIONS } from '../../../../../../navigation/Private/Dashboard/Profile/Help/Questions/constants';

export const navigationControl = (text: string, navigate: any) => {
  switch (text) {
    case 'Não consigo fazer/receber pagamento com QR code':
      navigate(QUESTIONS.QRCODE);

      break;

    default:
      break;
  }
};
