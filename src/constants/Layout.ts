import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface ILayout {
  paddingHorizontal: number;
  window: {
    width: number;
    height: number;
  };
  isSmallDevice: boolean;
}

const Layout: ILayout = {
  paddingHorizontal: width * (5 / 100),
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export default Layout;
