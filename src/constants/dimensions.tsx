import {Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const window = {
  width,
  height,
};

export const tabBarIconDimension = {
  width: 24,
  height: 24,
};

export const headerHeight = 50;
export const tabBarHeight = Platform.OS === 'ios' ? 72 : 50;
