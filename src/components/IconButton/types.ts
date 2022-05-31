export type iconTypes =
  | 'pix'
  | 'creditcard'
  | 'mobile'
  | 'transfer'
  | 'statement'
  | 'handshake'
  | 'analyticGraphic'
  | 'barcode'
  | 'umbrella'
  | 'dollarsign'
  | 'plus'
  | 'id'
  | 'mail'
  | 'import'
  | 'trash'
  | 'withdraw'
  | 'QRcode'
  | 'penny'
  | 'share'
  | 'Store'
  | 'Ticket'
  | 'People'
  | 'Pix'
  | 'Ballot'
  | 'moneypile';

export interface Iprops {
  squared?: boolean;
  onPress?(): void;
  label?: string;
  icon: iconTypes;
  small?: boolean;
  size?: string;
  grey?: boolean;
  disabled?: boolean;
  textColor?: string;
}
