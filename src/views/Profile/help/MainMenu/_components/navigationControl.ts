import { HELP } from '../../../../../navigation/Private/Dashboard/Profile/Help/constants';

export const navigationControl = (text: string, navigate: any) => {
  switch (text) {
    case 'Precisa de ajuda?':
      navigate(HELP.NEEDS);

      break;
    case 'Fale com a gente':
      navigate(HELP.CONTACT);

      break;

    default:
      break;
  }
};
