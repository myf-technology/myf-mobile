import { COMPANY } from './constants';

import {
  Guide,
  Name,
  Email,
  RepresentantGuide,
} from '../../../views/register/Company';

export default [
  {
    component: Guide,
    name: COMPANY.GUIDE,
  },
  {
    component: Name,
    name: COMPANY.NAME,
  },
  {
    component: Email,
    name: COMPANY.EMAIL,
  },
  {
    component: RepresentantGuide,
    name: COMPANY.REPRESENTANT_GUIDE,
  },
];
