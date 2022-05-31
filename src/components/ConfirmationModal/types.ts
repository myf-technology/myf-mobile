export interface Iprops {
  showModal: boolean;
  onConfirm(): void;
  onCancel(): void;
  loading: boolean;
  testID?: string;
}
