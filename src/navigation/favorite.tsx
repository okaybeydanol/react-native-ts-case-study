import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Type
import {FavoriteStack} from './types';

// Screen
import ProductDetailScreen from '@src/screens/ProductDetailScreen';
import FavoriteScreen from '@src/screens/FavoriteScreen';

const Favorite = createNativeStackNavigator<FavoriteStack>();

export const FavoriteNavigator = () => {
  return (
    <Favorite.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Favorite.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Favorite.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Favorite.Navigator>
  );
};
