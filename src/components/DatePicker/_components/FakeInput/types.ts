import { TouchableWithoutFeedbackProps } from 'react-native';

export interface IinputObject extends TouchableWithoutFeedbackProps {
  value: string | undefined;
  placeholder: string;
}
export interface Iprops {
  onPress?(): void;
  label: string;
  inputs: Array<IinputObject>;
  testID?: string;
}
