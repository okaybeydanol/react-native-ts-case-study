import {StyleSheet} from 'react-native';

// Type
import {fontFamily} from '@src/constants';
import {colors} from '@src/constants/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 16,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    color: colors.constant.dark,
    fontSize: 16,
    fontFamily: fontFamily.montserrat['400'],
  },
  productPrice: {
    color: colors.primary.main,
    fontSize: 13,
    fontFamily: fontFamily.montserrat['500'],
  },
  quantityContainer: {
    flexDirection: 'row',
  },
  quantityButton: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray['800'],
  },
  minus: {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  plus: {
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    color: colors.constant.dark,
    fontFamily: fontFamily.montserrat['700'],
  },
  quantity: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary.main,
  },
  quantityText: {
    color: colors.constant.white,
    fontFamily: fontFamily.montserrat['400'],
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
  totalDetails: {
    flex: 1,
  },
  totalText: {
    fontSize: 18,
    fontFamily: fontFamily.montserrat['400'],
    color: colors.primary.main,
  },
  totalPrice: {
    fontSize: 18,
    fontFamily: fontFamily.montserrat['700'],
    color: colors.constant.dark,
  },
  completeButton: {
    backgroundColor: colors.primary.main,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 40,
  },
  completeButtonText: {
    fontSize: 18,
    fontFamily: fontFamily.montserrat['700'],
    color: colors.constant.white,
  },
});
export default style;
