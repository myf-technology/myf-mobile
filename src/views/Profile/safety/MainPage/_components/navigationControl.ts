import { SAFETY } from '../../../../../navigation/Private/Dashboard/Profile/Safety/constants';

export const navigationControl = (text: string, navigate: any) => {
  switch (text) {
    case 'Alterar senha':
      navigate(SAFETY.RESET);

      break;
    case 'Atualizar cadastro':
      navigate(SAFETY.UPDATE);

      break;

    default:
      break;
  }
};
