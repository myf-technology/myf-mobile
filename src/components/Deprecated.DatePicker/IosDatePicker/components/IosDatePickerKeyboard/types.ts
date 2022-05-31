export interface Iprops {
  display?: 'flex' | 'none';
  returnKeyType?: 'next' | 'done';
  onSubmitEditing?(): void;
  getDate?(dateValue: string): void;
}

export enum enumReturnKeyType {
  done = 'Pronto',
  next = 'Próximo',
}
