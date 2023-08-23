import {Platform, StyleSheet} from 'react-native';
import {colors} from '@src/constants/colors';
import {fontFamily} from '@src/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.constant.white,
    zIndex: 1,
    height: Platform.OS === 'ios' ? 50 : 72,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    fontFamily: fontFamily.montserrat['400'],
    color: colors.constant.dark,
  },
});

export default styles;
