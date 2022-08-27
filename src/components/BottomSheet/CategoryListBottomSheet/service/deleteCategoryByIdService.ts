import { instance } from '../../../../services';

export const deleteCategoryByIdService = (categoryId: string) =>
  instance({
    method: 'DELETE',
    url: `/category/${categoryId}`,
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbnNreWpzQGljbG91ZC5jb20iLCJpYXQiOjE2NjA4NzQ3OTJ9.txbediMxUBsslqWSVCnoPaic0h8AnKrD8aKevgbrReA',
    },
  });
