import {StyleSheet} from 'react-native';

// Type
import {fontFamily} from '@src/constants';
import {colors} from '@src/constants/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.constant.dark,
    fontSize: 20,
    fontFamily: fontFamily.montserrat['700'],
  },
});

export default style;
