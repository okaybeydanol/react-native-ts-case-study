import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Type
import {HomeStack} from './types';

// Screen
import HomeScreen from '@src/screens/HomeScreen';
import ProductDetailScreen from '@src/screens/ProductDetailScreen';

const Home = createNativeStackNavigator<HomeStack>();

export const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Home.Screen name="HomeScreen" component={HomeScreen} />
      <Home.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Home.Navigator>
  );
};
