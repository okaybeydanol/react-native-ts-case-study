import React from 'react';
import {View, TouchableOpacity} from 'react-native';

// Type
import {StateRoutesMapParams} from '../types';

// Constant
import {colors} from '@src/constants/colors';

// Style
import {styles} from './style';
import {tabBarSvgHelper} from '@src/utils/svg';
import {tabBarIconDimension} from '@src/constants/dimensions';
import TabBarBadge from '@src/components/TabBar/Badge';

const TabBarButton = ({navigation, state, index}: StateRoutesMapParams) => {
  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index].key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({
        key: state.routes[index].key,
        merge: true,
      });
    }
  };

  const svgOptions = {
    stroke: isFocused ? colors.primary.main : colors.constant.dark,
    strokeWidth: 2,
  };

  const tabBarIcon = () => {
    return (
      <View>
        {tabBarSvgHelper({
          code: state.routes[index].name,
          props: {
            ...tabBarIconDimension,
            ...svgOptions,
          },
        })}
        {state.routes[index].name === 'BasketNavigator' && <TabBarBadge />}
      </View>
    );
  };

  return (
    <TouchableOpacity
      key={`tabBarButton-${index}`}
      onPress={onPress}
      accessibilityState={isFocused ? {selected: true} : {}}
      style={styles.tabBarTouchableOpacity}
      activeOpacity={0.9}>
      <View style={styles.tabBarButtonContainer}>{tabBarIcon()}</View>
    </TouchableOpacity>
  );
};

export default TabBarButton;
