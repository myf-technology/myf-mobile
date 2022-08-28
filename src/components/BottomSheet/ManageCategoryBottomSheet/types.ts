export interface CreateCategoryModalProps {
  onPress?: (createCategoryData: CreateCategoryData) => void;
}

export interface CreateCategoryData {
  newCategory: string;
  amount: string;
  description: string;
  autoInsert: boolean;
}
