export interface FilterIconsProps {
  icon?: string;
  onPress?: () => void;
  name?: string;
}

export interface ItemsProps {
  iconIndicator?: 'trending-down-outline' | 'trending-up-outline';
  categoryName?: string;
  balanceAmount?: number;
  eventDate?: number;
}
