import {StyleSheet} from 'react-native';
import {colors} from '@src/constants/colors';

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.constant.white,
    right: -8,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeViewContainer: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.danger.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.constant.white,
    fontSize: 9,
    fontWeight: 'bold',
  },
});

export default styles;
