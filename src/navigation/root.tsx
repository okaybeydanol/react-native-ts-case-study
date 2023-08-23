import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Type
import {RootStack} from './types';

// Navigator
import {TabNavigator} from '@src/navigation/tab';
import FilterScreen from '@src/screens/FilterScreen';

const Root = createNativeStackNavigator<RootStack>();

export function RootNavigator() {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Root.Screen name="TabNavigator" component={TabNavigator} />
      <Root.Screen
        options={{
          presentation: 'containedModal',
          animation: 'slide_from_bottom',
        }}
        name="FilterScreen"
        component={FilterScreen}
      />
    </Root.Navigator>
  );
}
