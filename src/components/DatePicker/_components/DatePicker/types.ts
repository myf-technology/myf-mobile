import { dateFormatType } from './_helpers/formatDate';

export interface DatePickerProps {
  onChange?: (normilizedDate: dateFormatType, formatedDate: string) => void;
  open?: boolean;
  returnKeyType?: 'next' | 'done';
  onSubmitEditing?(): void;
}

export enum enumReturnKeyType {
  done = 'Pronto',
  next = 'Próximo',
}
