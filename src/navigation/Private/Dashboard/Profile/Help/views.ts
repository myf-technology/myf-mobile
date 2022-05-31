import Questions from './Questions';
import { HELP } from './constants';

import { Help } from '../../../../../views/Profile/help/MainMenu';
import { ContactUs } from '../../../../../views/Profile/help/contactUs';

export default [
  {
    component: Help,
    name: HELP.HELP,
  },
  {
    component: Questions,
    name: HELP.NEEDS,
  },
  {
    component: ContactUs,
    name: HELP.CONTACT,
  },
];
