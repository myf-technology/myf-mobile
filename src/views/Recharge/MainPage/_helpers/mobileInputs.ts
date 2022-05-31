import { KeyboardTypeOptions } from 'react-native';

export const mobileInputs: {
  label: string;
  keyboardType: KeyboardTypeOptions;
  text: string;
}[] = [
  {
    text: '',
    keyboardType: 'numeric',
    label: 'Número de telefone',
  },
  {
    text: '/',
    keyboardType: 'default',
    label: 'Selecione a operadora',
    // this second input is not exactly an input but some kind of selector which brings a modal
    // i made this for now but it will be replaced after.
  },
];
