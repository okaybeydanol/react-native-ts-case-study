import {StyleSheet} from 'react-native';
import {tabBarHeight, window} from '@src/constants/dimensions';
import {colors} from '@src/constants/colors';
import {toScale} from '@src/utils/helpers';

const styles = StyleSheet.create({
  container: {
    width: window.width,
    height: toScale(tabBarHeight),
    backgroundColor: colors.constant.white,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 10,
    paddingTop: 12,
  },
});

export default styles;
