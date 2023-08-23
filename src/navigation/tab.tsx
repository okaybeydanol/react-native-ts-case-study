import React from 'react';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Component
import TabBar from '@src/components/TabBar';

// Type
import {TabStack} from './types';

// Screen
import ProfileScreen from '@src/screens/ProfileScreen';

// Navigator
import {HomeNavigator} from './home';
import {FavoriteNavigator} from './favorite';
import {BasketNavigator} from '@src/navigation/basket';

const Tab = createBottomTabNavigator<TabStack>();

// Sub Navigator
export const TabNavigator = () => {
  // tabBar
  const tabBar = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };

  const options: BottomTabNavigationOptions = {
    headerShown: false,
  };

  return (
    <>
      <Tab.Navigator screenOptions={options} tabBar={tabBar}>
        <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
        <Tab.Screen name="BasketNavigator" component={BasketNavigator} />
        <Tab.Screen name="FavoriteNavigator" component={FavoriteNavigator} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};
