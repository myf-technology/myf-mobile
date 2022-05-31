import { ReactNode } from 'react';

export interface Iprops {
  children: ReactNode;
  enabledContentGestureInteraction?: boolean;
  snapPoints: number[];
}
