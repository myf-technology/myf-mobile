import { instance } from '../../../../services';

export const deleteCategoryByIdService = (categoryId: string) =>
  instance.delete(`/category/${categoryId}`);
