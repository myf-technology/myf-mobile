import { ImageSourcePropType } from 'react-native';

export interface IProps {
  carouselImages: Array<ImageSourcePropType>;
  refs?: any;
  onScroll(event: any): void;
}
