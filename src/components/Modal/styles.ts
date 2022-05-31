// import { StyleSheet } from 'react-native';

// import Colors from '../../constants/Colors';
// import { height, width } from '../../constants/responsive';

// const BORDER_RADIUS = {
//   borderTopLeftRadius: width(6),
//   borderTopRightRadius: width(6),
// };

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.dark,
//     ...BORDER_RADIUS,
//   },
//   head: {
//     backgroundColor: Colors.yellow,
//     ...BORDER_RADIUS,
//     width: width(100),
//     height: height(4),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   indicator: {
//     backgroundColor: Colors.grey,
//     height: height(0.6),
//     width: width(13),
//     borderRadius: width(6.5),
//   },
// });

import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { width, height } from '../../constants/responsive';

const BORDER_RADIUS = {
  borderTopLeftRadius: width(4),
  borderTopRightRadius: width(4),
};

export default StyleSheet.create({
  modalHead: {
    backgroundColor: Colors.white,
    height: height(5),
    width: width(100),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: Colors.grey3,
    shadowOpacity: 0.04,
    zIndex: 1,
    shadowOffset: {
      height: 6,
      width: 3,
    },
    shadowRadius: 3,
    ...BORDER_RADIUS,
  },
  indicator: {
    height: height(0.5),
    width: width(16),
    backgroundColor: Colors.grey3,
  },
  modalContent: {
    backgroundColor: '#F9F9F9',
  },
});
