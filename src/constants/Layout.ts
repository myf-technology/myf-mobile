import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const paddingHorizontal = width * (5 / 100);
export const windowWidth = width;
export const windowHeight = height;
export const isSmallDevice = width < 375;
