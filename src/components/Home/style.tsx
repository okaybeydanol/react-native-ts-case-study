import {StyleSheet} from 'react-native';

// Constant
import {colors} from '@src/constants/colors';
import {window} from '@src/constants/dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingBottom: 15,
  },
  pageLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterModal: {
    backgroundColor: colors.constant.white,
    height: window.height,
    overflow: 'hidden',
  },
});

export default style;
