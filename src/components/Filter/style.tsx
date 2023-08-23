import {StyleSheet} from 'react-native';

// Constant
import {colors} from '@src/constants/colors';
import {fontFamily} from '@src/constants';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  section: {
    marginTop: 16,
    marginHorizontal: 12,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1,
    paddingBottom: 33,
    marginBottom: 16,
  },
  sectionTitle: {
    color: 'rgba(51, 51, 51, 0.7)',
    fontFamily: fontFamily.montserrat['400'],
    fontSize: 12,
  },
  sortByOption: {
    flexDirection: 'row',
    marginTop: 21,
    marginLeft: 15,
    alignItems: 'center',
  },
  optionIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.primary.main,
    backgroundColor: colors.constant.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },
  indicatorInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  optionText: {
    fontSize: 14,
    fontFamily: fontFamily.montserrat['400'],
    color: colors.gray['300'],
  },
  inputContainer: {
    marginTop: 21,
    marginHorizontal: 15,
  },
  brandScroll: {
    marginTop: 16,
    marginLeft: 15,
    height: 200,
  },
  brandOption: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  brandIndicator: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },
  brandText: {
    fontSize: 14,
    fontFamily: fontFamily.montserrat['400'],
    color: colors.gray['300'],
  },
  sectionTwo: {
    marginTop: 16,
    marginHorizontal: 12,
  },
  modelScroll: {
    marginTop: 16,
    marginLeft: 15,
    height: 200,
  },
  modelOption: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  modelIndicator: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },
  modelText: {
    fontSize: 14,
    fontFamily: fontFamily.montserrat['400'],
    color: colors.gray['300'],
  },
  button: {
    marginHorizontal: 17,
    backgroundColor: colors.primary.main,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fontFamily.montserrat['700'],
    color: colors.constant.white,
  },
});

export default style;
