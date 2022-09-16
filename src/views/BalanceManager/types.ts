import { ReactNode } from 'react';

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
  balanceDay: string;
}

export interface BalanceListProps {
  balanceMonth: string;
  data: UnitBalanceProps[];
  balanceListId: number;
}

export interface BalanceInselfProps {
  date: ReactNode;
  received: number;
  freeAmount: number;
  expenses: number;
}
