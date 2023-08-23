import {TextStyle, ViewStyle} from 'react-native';
import React from 'react';

interface IconOptions {
  shown?: boolean | undefined;
  strokeOptions?: {
    width?: number | undefined;
    color?: string | undefined;
  };
  fillOptions?: {
    color?: string | undefined;
  };
  width?: number | undefined;
  height?: number | undefined;
  icon?: React.ReactNode | undefined;
  iconClick?: () => void | undefined;
  style?: ViewStyle | ViewStyle[] | undefined;
}

export interface HeaderProps {
  leftOptions?: IconOptions;
  rightOptions?: IconOptions;
  style?: ViewStyle | ViewStyle[] | undefined;
  presentation?: 'close' | 'back';
  insetTop?: boolean;
  textOptions?: {
    shown?: boolean | undefined;
    title?: string | undefined;
    style?: TextStyle | TextStyle[] | undefined;
    containerStyle?: TextStyle | TextStyle[] | undefined;
    component?: React.ReactNode;
  };
}
