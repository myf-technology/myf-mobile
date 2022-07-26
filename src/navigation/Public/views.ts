import JuricidalPerson from './Company';
import { PUBLIC } from './constants';

import Storybook from '../../../storybook';
import Dev from '../../views/Dev';
import { Home } from '../../views/Home';
import { Login } from '../../views/Login';
import { FinancePassword } from '../../views/Transaction/FinancePassword';
import { Address } from '../../views/register/Address';
import { Aknowledgment } from '../../views/register/Aknowledgment';
import { Birthdate } from '../../views/register/Birthdate';
import { CpfCnpj } from '../../views/register/CpfCnpj';
import { Document } from '../../views/register/Document';
import { Email } from '../../views/register/Email';
import { Password } from '../../views/register/Password';
import { ResidenceProof } from '../../views/register/ResidenceProof';
import { Selfie } from '../../views/register/Selfie';
import { SelfieGuide } from '../../views/register/SelfieGuide';

export default [
  {
    name: PUBLIC.DEV,
    component: Dev
  },
  {
    name: PUBLIC.HOME,
    component: Home
  },
  {
    name: PUBLIC.STORYBOOK,
    component: Storybook
  },
  {
    name: PUBLIC.LOGIN,
    component: Login
  },
  {
    name: PUBLIC.CPFCNPJ,
    component: CpfCnpj
  },
  {
    name: PUBLIC.BIRTHDATE,
    component: Birthdate
  },
  {
    name: PUBLIC.EMAIL,
    component: Email
  },
  {
    name: PUBLIC.ADDRESS,
    component: Address
  },
  {
    name: PUBLIC.PASSWORD,
    component: Password
  },
  {
    name: PUBLIC.SELFIEGUIDE,
    component: SelfieGuide
  },
  {
    name: PUBLIC.SELFIE,
    component: Selfie
  },
  {
    name: PUBLIC.DOCUMENT,
    component: Document
  },
  {
    name: PUBLIC.RESIDENCE_PROOF,
    component: ResidenceProof
  },
  {
    name: PUBLIC.AKNOWLEDGEMENT,
    component: Aknowledgment
  },
  {
    name: PUBLIC.JURIDICAL_PERSON,
    component: JuricidalPerson
  },
  {
    name: PUBLIC.FINANCE_PASSWORD,
    component: FinancePassword
  }
];
