import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

// Type
import {ProductsApiResponse} from '@src/store/api/types';

// Store
import {useAppDispatch, useAppSelector} from '@src/store';
import {setBasket} from '@src/store/slices/basket';
import {setFavorite} from '@src/store/slices/favorite';

// Svg
import Star from '@assets/svg/Star.svg';

// Constant
import {colors} from '@src/constants/colors';

// Style
import styles from './style';

const ProductDetail = ({data}: {data: ProductsApiResponse}) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorite);
  const addFavoriteHandler = () => {
    dispatch(setFavorite(data.id));
  };
  const addToCardHandler = () => {
    dispatch(setBasket({product: data, actionType: 'plus'}));
  };
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.productInfo}>
        <Image
          source={{uri: data?.image}}
          style={styles.productImage}
          resizeMode={'stretch'}
        />
        <Text numberOfLines={1} style={styles.productTitle}>
          {`${data?.brand} ${data?.model} ${data?.name}`}
        </Text>
        <Text style={styles.productDescription}>{data?.description}</Text>
      </View>
      <View style={styles.productPriceContainer}>
        <View style={styles.productPrice}>
          <Text style={styles.priceLabel}>Price:</Text>
          <Text style={styles.priceAmount}>{data?.price} ₺</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={addToCardHandler}
          style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        hitSlop={{left: 24, right: 24, bottom: 24, top: 24}}
        onPress={addFavoriteHandler}
        style={styles.favoriteButton}>
        <Star
          fill={
            favorites.length > 0 && favorites.includes(data.id)
              ? colors.warning.main
              : colors.gray['800']
          }
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetail;
