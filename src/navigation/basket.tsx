import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Type
import {BasketStack} from './types';

// Screen
import ProductDetailScreen from '@src/screens/ProductDetailScreen';
import BasketScreen from '@src/screens/BasketScreen';

const Basket = createNativeStackNavigator<BasketStack>();

export const BasketNavigator = () => {
  return (
    <Basket.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Basket.Screen name="BasketScreen" component={BasketScreen} />
      <Basket.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Basket.Navigator>
  );
};
