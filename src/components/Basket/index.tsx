import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Store
import {useAppDispatch, useAppSelector} from '@src/store';
import {getTotalPrice, setBasket} from '@src/store/slices/basket';

// Type
import {ProductSlice} from '@src/store/slices/types';

// Style
import styles from './style';

const Basket = () => {
  const dispatch = useAppDispatch();
  const basketProducts = useAppSelector(state => state.basket);
  const navigation = useNavigation();
  const basketHandler = (
    actionType: 'minus' | 'plus',
    product: ProductSlice,
  ) => {
    dispatch(setBasket({product, actionType}));
  };

  const navigationHandler = (id: string) => {
    navigation.navigate('ProductDetailScreen', {id});
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {basketProducts.map((item, index) => (
          <View key={index} style={styles.productContainer}>
            <TouchableOpacity
              onPress={() => navigationHandler(item.id)}
              style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>
                {+item.price * item.count} ₺
              </Text>
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => basketHandler('minus', item)}
                style={[styles.quantityButton, styles.minus]}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <View style={styles.quantity}>
                <Text style={styles.quantityText}>{item.count}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => basketHandler('plus', item)}
                style={[styles.quantityButton, styles.plus]}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {basketProducts.length > 0 && (
        <View style={styles.totalContainer}>
          <View style={styles.totalDetails}>
            <Text style={styles.totalText}>Price:</Text>
            <Text style={styles.totalPrice}>
              {getTotalPrice(basketProducts)} ₺
            </Text>
          </View>
          <View style={styles.completeButton}>
            <Text style={styles.completeButtonText}>Complete</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Basket;
