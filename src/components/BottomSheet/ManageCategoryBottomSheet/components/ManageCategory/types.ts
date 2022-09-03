import { CreateCategoryData } from '../../types';

export interface IManageCategoryProps {
  onPress?(category: CreateCategoryData): void;
}
