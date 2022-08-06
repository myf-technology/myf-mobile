import { ComponentClass, FunctionComponent, RefAttributes } from 'react';
import { SvgProps } from 'react-native-svg';

import { iconProps } from './_components/types';

export interface Iprops extends iconProps {
  name: iconNameProp;
}

export enum iconName {
  AnalyticGraphic = 'AnalyticGraphic',
  ArrowBack = 'ArrowBack',
  ArrowForward = 'ArrowForward',
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  Barcode = 'Barcode',
  Bell = 'Bell',
  CreditCard = 'CreditCard',
  DollarSign = 'DollarSign',
  Eye = 'Eye',
  HandShake = 'HandShake',
  Home = 'Home',
  Id = 'Id',
  Import = 'Import',
  Mail = 'Mail',
  Mobile = 'Mobile',
  Money = 'Money',
  MoneyHidden = 'MoneyHidden',
  MoneyPile = 'MoneyPile',
  Penny = 'Penny',
  Person = 'Person',
  Pix = 'Pix',
  Plus = 'Plus',
  QRcode = 'QRcode',
  Share = 'Share',
  Statement = 'Statement',
  SwitchCamera = 'SwitchCamera',
  Transfer = 'Transfer',
  Trash = 'Trash',
  Umbrella = 'Umbrella',
  Valepay = 'Valepay',
  ValepayLogo = 'ValepayLogo',
  Wallet = 'Wallet',
  Withdraw = 'Withdraw',
  Check = 'Check',
  Gear = 'Gear',
  Store = 'Store',
  Shield = 'Shield',
  InterrogationSign = 'InterrogationSign',
  DoorOpen = 'DoorOpen',
  CardId = 'CardId',
  PlusSign = 'PlusSign',
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  Shuffle = 'Shuffle',
  Cross = 'Cross',
  Ticket = 'Ticket',
  People = 'People',
  Ballot = 'Ballot',
  Type = 'Type',
  Web = 'Web',
  MyF = 'MyF',
  Calendar = 'Calendar'
}

export type iconNameProp =
  | 'AnalyticGraphic'
  | 'ArrowBack'
  | 'ArrowForward'
  | 'Barcode'
  | 'Bell'
  | 'CreditCard'
  | 'DollarSign'
  | 'Eye'
  | 'HandShake'
  | 'Home'
  | 'Id'
  | 'Import'
  | 'Mail'
  | 'Mobile'
  | 'Money'
  | 'MoneyHidden'
  | 'MoneyPile'
  | 'Penny'
  | 'Person'
  | 'Pix'
  | 'Plus'
  | 'QRcode'
  | 'Share'
  | 'Statement'
  | 'SwitchCamera'
  | 'Transfer'
  | 'Trash'
  | 'Umbrella'
  | 'Valepay'
  | 'ValepayLogo'
  | 'Wallet'
  | 'Withdraw'
  | 'Gear'
  | 'Shield'
  | 'InterrogationSign'
  | 'DoorOpen'
  | 'ArrowDown'
  | 'CardId'
  | 'ArrowUp'
  | 'Store'
  | 'PlusSign'
  | 'Shuffle'
  | 'Web'
  | 'Facebook'
  | 'Cross'
  | 'Type'
  | 'Ballot'
  | 'Ticket'
  | 'Instagram'
  | 'Calendar'
  | 'MyF'
  | 'Check';

export type element =
  | string
  | FunctionComponent<SvgProps & RefAttributes<unknown>>
  | ComponentClass<SvgProps & RefAttributes<unknown>>;
