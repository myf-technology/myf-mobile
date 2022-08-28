export interface CreateCategoryModalProps {
  onPress?: (createCategoryData: CreateCategoryData) => void;
}

interface CreateCategoryData {
  newCategory: string;
  amount: string;
  description: string;
  autoInsert: boolean;
}
