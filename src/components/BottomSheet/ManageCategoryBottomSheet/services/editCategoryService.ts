import { instance } from '../../../../services';
import { IEditCategoryPayload } from '../store/types';

export const editCategoryService = ({
  categoryId,
  categoryData,
}: IEditCategoryPayload) =>
  instance({
    method: 'PUT',
    url: `/category/${categoryId}`,
    data: categoryData,
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbnNreWpzQGljbG91ZC5jb20iLCJpYXQiOjE2NjA4NzQ3OTJ9.txbediMxUBsslqWSVCnoPaic0h8AnKrD8aKevgbrReA',
    },
  });
