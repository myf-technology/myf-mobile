import { PUBLIC } from './constants';

import Storybook from '../../../storybook';
import Dev from '../../views/Dev';
import { Home } from '../../views/Home';
import { Login } from '../../views/Login';
import { NameEmail } from '../../views/register/EmailName';
import { VerifyEmail } from '../../views/register/VerifyEmail';
import { Password } from '../../views/register/Password';
import { Placeholder } from '../../views/Placeholder';

export default [
  {
    name: PUBLIC.DEV,
    component: Dev,
  },
  {
    name: PUBLIC.HOME,
    component: Home,
  },
  {
    name: PUBLIC.STORYBOOK,
    component: Storybook,
  },
  {
    name: PUBLIC.LOGIN,
    component: Login,
  },
  {
    name: PUBLIC.EMAILNAME,
    component: NameEmail,
  },
  {
    name: PUBLIC.PASSWORD,
    component: Password,
  },
  {
    name: PUBLIC.VERIFY_EMAIL,
    component: VerifyEmail,
  },
  { name: PUBLIC.PLACEHOLDER, component: Placeholder },
];
