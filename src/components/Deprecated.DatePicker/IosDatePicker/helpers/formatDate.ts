export type dateFormatType = {
  day: string;
  month: string;
  year: string;
} | null;

export type formatDateType = (date: string) => dateFormatType;
export type normalizeDateType = (date: Date) => string;

export const normalizeDate: normalizeDateType = (date: Date): string =>
  JSON.stringify(date).slice(1, 11);

export const formatDate: formatDateType = (date) => {
  const dateArray = JSON.stringify(date).match(
    /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  );

  if (dateArray) {
    return {
      day: dateArray[3],
      month: dateArray[2],
      year: dateArray[1],
    };
  }

  return null;
};
