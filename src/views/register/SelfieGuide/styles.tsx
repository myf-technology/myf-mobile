import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  selfieGuide: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    flexGrow: 0.3,
    justifyContent: 'center',
  },
  carousel: {
    flexBasis: 50,
    flexGrow: 4,
  },
  details: {
    flexGrow: 4,
    alignItems: 'center',
  },
  callout: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  indicator: {
    flex: 0.5,
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
  },
});
