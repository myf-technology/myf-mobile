import { BalanceType } from '../../../../types/balanceType';

export interface ISelectedCategory {
  categoryId: string;
  name: string;
}

export interface ICategoryProps {
  balanceType: BalanceType;
  selectedCategory?: ISelectedCategory;
}
