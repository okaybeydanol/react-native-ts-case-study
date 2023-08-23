import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Svg
import Star from '@assets/svg/Star.svg';

// Constant
import {colors} from '@src/constants/colors';
import {numbers} from '@src/constants';

// Store
import {useAppDispatch, useAppSelector} from '@src/store';
import {setFavorite} from '@src/store/slices/favorite';
import {setBasket} from '@src/store/slices/basket';

// Type
import {ListingHandlerProps} from '@src/components/Home/types';

// Style
import styles from './style';

const HomeListing = ({item, index}: ListingHandlerProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorite);
  const navigation = useNavigation();
  const itemPressHandler = () => {
    navigation.navigate('ProductDetailScreen', {id: item.id});
  };
  const addToCartHandler = () => {
    dispatch(setBasket({product: item, actionType: 'plus'}));
  };
  const addFavoriteHandler = () => {
    dispatch(setFavorite(item.id));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={itemPressHandler}
      style={[
        styles.itemContainer,
        {
          marginLeft: index % 2 === 0 ? numbers.fifteen : numbers.twentyOne,
        },
      ]}>
      <View>
        <Image source={{uri: item.image}} height={150} resizeMode={'stretch'} />
        <Text style={styles.price}>{item.price} ₺</Text>
        <Text style={styles.name} numberOfLines={2}>
          {`${item?.brand} ${item?.model} ${item?.name}`}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={addToCartHandler}
        style={styles.addToCartContainer}>
        <Text style={styles.addToCart}>Add To Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={{left: 24, right: 24, bottom: 24, top: 24}}
        activeOpacity={0.8}
        onPress={addFavoriteHandler}
        style={styles.favorite}>
        <Star
          fill={
            favorites.length > 0 && favorites.includes(item.id)
              ? colors.warning.main
              : colors.gray['800']
          }
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HomeListing;
