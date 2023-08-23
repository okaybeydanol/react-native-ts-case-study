import {StyleSheet} from 'react-native';
import {colors} from '@src/constants/colors';
import {fontFamily} from '@src/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary.main,
  },
  headerText: {
    fontSize: 24,
    fontFamily: fontFamily.montserrat['700'],
    color: colors.constant.white,
  },
  headerContainerText: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 16,
    marginTop: 6,
  },
});

export default styles;
