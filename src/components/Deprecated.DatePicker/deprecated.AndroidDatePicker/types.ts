export type inputsType = {
  key?: string;
  value?: string;
  placeholder?: string;
};

export interface Iprops {
  label?: string;
  onSubmitEditing?(): void;
  onChangeText?(text: string, index: number): void;
  inputs?: Array<inputsType>;
  testID?: string;
  onBlur?(): void;
}
