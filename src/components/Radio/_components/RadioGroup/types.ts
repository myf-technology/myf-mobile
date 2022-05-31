export interface Iprops {
  data: { text: string }[];
  onCheck?(index: number): void;
}
