import { QUESTIONS } from './constants';

import { AboutQRcode } from '../../../../../../views/Profile/help/asked/AboutQRcode';
import { Asked } from '../../../../../../views/Profile/help/asked/MainMenu';

export default [
  {
    component: Asked,
    name: QUESTIONS.QUESTIONS,
  },
  {
    component: AboutQRcode,
    name: QUESTIONS.QRCODE,
  },
];
