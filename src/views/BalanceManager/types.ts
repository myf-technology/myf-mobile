export interface FilterIconsProps {
  icon?: string;
  onPress?: () => void;
  name?: string;
}

export interface ItemsProps {
  name?: string;
  description?: string;
  amount: number;
  balanceId?: string;
  balanceType: 'EXPENSE' | 'INCOME';
  balanceDay: Date;
}

export interface UnitBalanceProps {
  name: string;
  description: string;
  amount: number;
  balanceId: string;
  balanceType: 'EXPENSE' | 'INCOME';
  balanceDay: Date;
}

export interface BalanceListProps {
  balanceMonth: Date;
  data: UnitBalanceProps[];
}

export interface BalanceInselfProps {
  date: Date;
  received: number;
  freeAmount: number;
  expenses: number;
}
