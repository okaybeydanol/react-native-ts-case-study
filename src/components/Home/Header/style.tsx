import {StyleSheet} from 'react-native';

// Constant
import {colors} from '@src/constants/colors';
import {fontFamily} from '@src/constants';

const style = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 15,
  },
  inputContainer: {
    marginVertical: 14,
  },
  headerViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  filters: {
    fontSize: 18,
    fontFamily: fontFamily.montserrat['500'],
  },
  selectFiltersContainer: {
    width: 158,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray['800'],
  },
  selectFilters: {
    fontSize: 14,
    fontFamily: fontFamily.montserrat['400'],
  },
});

export default style;
