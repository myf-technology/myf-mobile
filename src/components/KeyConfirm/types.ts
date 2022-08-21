import { Dispatch, SetStateAction } from 'react';

export interface iProps {
  digitOne?: Dispatch<SetStateAction<string>> | void;
  digitTwo?: Dispatch<SetStateAction<string>> | void;
  digitThree?: Dispatch<SetStateAction<string>> | void;
  digitFour?: Dispatch<SetStateAction<string>> | void;
  onBlur?: () => void;
  digitOneValue?: string;
  digitTwoValue?: string;
  digitThreeValue?: string;
  digitFourValue?: string;
  passwordMode?: boolean;
}
