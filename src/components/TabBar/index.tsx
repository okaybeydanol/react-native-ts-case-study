import React from 'react';
import {View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// Component
import TabBarButton from './Button';

// Style
import styles from './style';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((_, index: number) => {
        return (
          <TabBarButton
            key={`route-${index}`}
            navigation={navigation}
            state={state}
            index={index}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
