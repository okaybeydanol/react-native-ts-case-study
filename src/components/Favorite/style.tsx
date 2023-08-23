import {StyleSheet} from 'react-native';

// Constant
import {colors} from '@src/constants/colors';

const style = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
  },
  listingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default style;
