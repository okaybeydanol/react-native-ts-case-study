import {StyleSheet} from 'react-native';

// Constant
import {colors} from '@src/constants/colors';
import {fontFamily} from '@src/constants';
import {window} from '@src/constants/dimensions';

const style = StyleSheet.create({
  itemContainer: {
    height: 302,
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    width: (window.width - 50) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: 14,
    padding: 10,
  },
  price: {
    marginTop: 15,
    color: colors.primary.main,
    fontFamily: fontFamily.montserrat['500'],
    fontSize: 14,
    lineHeight: 14,
  },
  name: {
    marginTop: 15,
    color: colors.constant.dark,
    fontFamily: fontFamily.montserrat['500'],
    fontSize: 14,
  },
  addToCartContainer: {
    height: 36,
    backgroundColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  addToCart: {
    color: colors.constant.white,
    fontFamily: fontFamily.montserrat['400'],
    fontSize: 16,
  },
  favorite: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});

export default style;
