import {StyleSheet} from 'react-native';

// Constant
import {fontFamily} from '@src/constants';
import {colors} from '@src/constants/colors';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: 15,
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    flexGrow: 1,
    flexDirection: 'column',
  },
  productInfo: {
    marginBottom: 20,
  },
  productImage: {
    marginTop: 16,
    height: 255,
  },
  productTitle: {
    fontSize: 20,
    fontFamily: fontFamily.montserrat['700'],
    color: colors.constant.dark,
    marginVertical: 16,
  },
  productDescription: {
    fontSize: 14,
    fontFamily: fontFamily.montserrat['400'],
    color: colors.constant.dark,
  },
  productPriceContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
  productPrice: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 18,
    fontFamily: fontFamily.montserrat['400'],
    color: colors.primary.main,
  },
  priceAmount: {
    fontSize: 18,
    fontFamily: fontFamily.montserrat['700'],
    color: colors.constant.dark,
  },
  addToCartButton: {
    backgroundColor: colors.primary.main,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fontFamily.montserrat['700'],
    color: colors.constant.white,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 26,
  },
});

export default style;
