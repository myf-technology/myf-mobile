import { Icon } from '../../Icon';
import { ToggleBase } from '../../Toggle/ToggleBase';
import { suffixType } from '../types';

export interface ActionConfirmProps {
  suffix: suffixType;
  on?: boolean;
  onPress?(): void;
}

export const ActionConfirm = ({ suffix, on, onPress }: ActionConfirmProps) => {
  switch (suffix) {
    case 'ArrowForward':
      return <Icon name="ArrowForward" />;
    case 'Toggle':
      return <ToggleBase on={on} onPress={onPress} />;
    case 'Check':
      return <Icon name="Check" fill="yellow" />;
    case 'ArrowDown':
      return <Icon name="ArrowDown" fill="" />;
    case 'ArrowUp':
      return <Icon name="ArrowUp" fill="dark" />;
    case 'PlusSign':
      return <Icon name="PlusSign" fill="dark" />;
    case 'Import':
      return <Icon name="Import" fill="dark" />;
    default:
      return null;
  }
};
