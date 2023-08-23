import {SvgProps} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native';

export interface SvgHelperProps {
  code: string;
  style?: StyleProp<ViewStyle>;
  props?: SvgProps;
}
