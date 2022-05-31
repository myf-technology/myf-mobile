import { SharedValue } from 'react-native-reanimated';

export interface Iprops {
  active: SharedValue<number>;
  indicators: number[];
}
