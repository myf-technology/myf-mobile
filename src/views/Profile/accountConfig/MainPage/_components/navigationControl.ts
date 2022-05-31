import { CONFIG } from '../../../../../navigation/Private/Dashboard/Profile/AccountConfig/constants';

export const navigationControl = (text: string, navigate: any) => {
  switch (text) {
    case 'Tarifas e taxas':
      navigate(CONFIG.FEES);

      break;
    case 'Termos e condições de uso':
      navigate(CONFIG.TERMS);

      break;
    case 'Política de privacidade':
      navigate(CONFIG.PRIVACY);

      break;
    case 'Permissões e notificações':
      navigate(CONFIG.PERMISSION);

      break;

    default:
      break;
  }
};
