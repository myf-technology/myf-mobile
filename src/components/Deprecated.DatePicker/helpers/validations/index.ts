import { registerNameBirthdatePayload } from '../../../../store/reducers/user/types';

// [TODO]: should allow -18 years old join?
export const birthdate = ({ birthdate = '' }: registerNameBirthdatePayload) => {
  const [year = '', month = '', day = ''] = birthdate.split('-');
  const currentYear = new Date().getFullYear();

  const MIN_DAY = +day < 1;
  const MAX_DAY = +day >= 31;

  const MIN_MONTH = +month < 1;
  const MAX_MONTH = +month > 12;

  const MIN_YEAR = +year <= 1900;
  const MAX_YEAR = +year >= +currentYear;

  if (MIN_DAY || MAX_DAY || MIN_MONTH || MAX_MONTH || MIN_YEAR || MAX_YEAR)
    return 'Data Inválida';

  return '';
};
