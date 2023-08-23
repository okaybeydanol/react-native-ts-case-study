import React from 'react';
import {Text, View} from 'react-native';

// Store
import {getTotalProductsCount} from '@src/store/slices/basket';
import {useAppSelector} from '@src/store';

// Style
import styles from './style';

const TabBarBadge = () => {
  const basketProduct = useAppSelector(state => state.basket);
  return (
    <>
      {basketProduct.length > 0 ? (
        <View style={styles.badgeContainer}>
          <View style={styles.badgeViewContainer}>
            <Text style={styles.badgeText}>
              {getTotalProductsCount(basketProduct)}
            </Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default TabBarBadge;
