import React from 'react';

import {SvgProps} from 'react-native-svg';
import {SvgHelperProps} from '@src/utils/types';
import {StyleSheet} from 'react-native';

// TabBar
import Profile from '@assets/svg/tabBar/Profile.svg';
import Basket from '@assets/svg/tabBar/Basket.svg';
import Favorite from '@assets/svg/tabBar/Favorite.svg';
import Home from '@assets/svg/tabBar/Home.svg';

const tabBarSvg: {[key: string]: React.FC<SvgProps>} = {
  HomeNavigator: Home,
  BasketNavigator: Basket,
  FavoriteNavigator: Favorite,
  ProfileScreen: Profile,
};

const tabBarSvgHelper = ({code, style, props}: SvgHelperProps) => {
  const styles = StyleSheet.flatten(style);
  if (code in tabBarSvg) {
    const FlagComponent = tabBarSvg[code];
    return <FlagComponent {...props} style={styles} />;
  }
};

export {tabBarSvgHelper};
