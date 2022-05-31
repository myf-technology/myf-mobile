import Colors from '../../../constants/Colors';
import { Icon } from '../../Icon';
import { iconTypes } from '../types';

export const DynamicIcon = ({
  icon,
  height,
}: {
  icon: iconTypes;
  height: number | string;
}) => {
  switch (icon) {
    case 'pix':
      return <Icon name="Pix" height={height} />;

    case 'creditcard':
      return <Icon name="CreditCard" height={height} />;

    case 'mobile':
      return <Icon name="Mobile" />;

    case 'transfer':
      return <Icon name="Transfer" />;

    case 'statement':
      return <Icon name="Statement" />;
    case 'handshake':
      return <Icon name="HandShake" />;
    case 'analyticGraphic':
      return <Icon name="AnalyticGraphic" />;
    case 'barcode':
      return <Icon name="Barcode" />;
    case 'umbrella':
      return <Icon name="Umbrella" />;
    case 'moneypile':
      return <Icon name="MoneyPile" />;
    case 'dollarsign':
      return <Icon name="DollarSign" />;
    case 'plus':
      return <Icon name="Plus" />;
    case 'id':
      return <Icon name="Id" />;
    case 'mail':
      return <Icon name="Mail" />;
    case 'import':
      return <Icon name="Import" />;
    case 'trash':
      return <Icon name="Trash" colors={Colors.red} />;
    case 'withdraw':
      return <Icon name="Withdraw" />;
    case 'QRcode':
      return <Icon name="QRcode" />;
    case 'penny':
      return <Icon name="Penny" />;
    case 'share':
      return <Icon name="Share" />;
    case 'Store':
      return <Icon name="Store" />;
    case 'People':
      return <Icon name="People" />;
    case 'Ticket':
      return <Icon name="Ticket" />;
    case 'Pix':
      return <Icon name="Pix" />;
    case 'Ballot':
      return <Icon name="Ballot" />;

    default:
      return null;
  }
};
