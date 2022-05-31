import { iconNameProp } from '../../../../components/Icon/types';
import { PROFILE } from '../../../../navigation/Private/Dashboard/Profile/constants';

export const navigationControl = (name: iconNameProp, navigate: any) => {
  switch (name) {
    case 'Person':
      navigate(PROFILE.DATA as never);
      break;
    case 'Gear':
      navigate(PROFILE.CONFIG as never);
      break;
    case 'Shield':
      navigate(PROFILE.SAFETY as never);
      break;
    case 'InterrogationSign':
      navigate(PROFILE.HELP as never);
      break;
    case 'DoorOpen':
      navigate(PROFILE.DISABLE as never);
      break;

    default:
      break;
  }
};
