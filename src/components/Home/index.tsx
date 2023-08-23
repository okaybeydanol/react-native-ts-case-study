import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, Keyboard, View} from 'react-native';

// Helper
import {slugify, wait} from '@src/utils/helpers';

// Api
import {useLazyGetProductsQuery} from '@src/store/api';

// Component
import HomeListing from '@src/components/Home/Listing';
import HomeHeader from '@src/components/Home/Header';

// Constant
import {colors} from '@src/constants/colors';

// Hook
import useCustomTextInput from '@src/hooks/useCustomTextInput';

// Store
import {useAppDispatch, useAppSelector} from '@src/store';
import {setProduct} from '@src/store/slices/product';
import {setFilteredProducts} from '@src/store/slices/filter';

// Type
import {ListingHandlerProps} from '@src/components/Home/types';
import {HomeRootStackScreenProps} from '@src/navigation/types';

// Style
import styles from './style';

const Home = ({
  navigation,
  route,
}: HomeRootStackScreenProps<'TabNavigator', 'HomeScreen'>) => {
  const search = useCustomTextInput(v => v.length > 0);
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.product);
  const {brands, models, order} = useAppSelector(state => state.filter);

  const [page, setPage] = useState(1);

  const [pageLoading, setPageLoading] = useState(true);
  const [infinityScrollLoading, setInfinityScrollLoading] = useState(false);
  const [productApiTrigger] = useLazyGetProductsQuery();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (brands.length > 0 && models.length === 0) {
      result = result.filter(product => brands.includes(product.brand));
    } else if (models.length > 0 && brands.length === 0) {
      result = result.filter(product => models.includes(product.model));
    } else if (brands.length > 0 && models.length > 0) {
      result = result.filter(
        product =>
          brands.includes(product.brand) && models.includes(product.model),
      );
    }

    switch (order) {
      case 'Old to new':
        result.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
        break;
      case 'New to old':
        result.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        break;
      case 'Price high to low':
        result.sort((a, b) => +b.price - +a.price);
        break;
      case 'Price low to High':
        result.sort((a, b) => +a.price - +b.price);
        break;
      default:
        break;
    }
    if (search.value === '') {
      return result;
    } else {
      return result.filter(p => {
        return slugify(p.name + ' ' + p.brand + ' ' + p.model).includes(
          slugify(search.value),
        );
      });
    }
  }, [brands, models, order, products, search.value]);

  useEffect(() => {
    productApiTrigger()
      .then(productsApi => {
        dispatch(setProduct(productsApi.data ?? []));
      })
      .finally(() => setPageLoading(false));

    if (page === 0) {
      loadData(page).then(r => r);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setFilteredProducts({product: filteredProducts}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts]);

  const loadData = async (pageNum: number): Promise<void> => {
    const maxPages = Math.ceil(filteredProducts.length / 12);
    if (pageNum < maxPages) {
      setInfinityScrollLoading(true);
      await wait(1000);
      setPage(prevPage => Math.min(prevPage + 1, maxPages));
      setInfinityScrollLoading(false);
    }
  };

  const renderFooter = () => {
    if (!infinityScrollLoading) {
      return null;
    }
    return <ActivityIndicator color={colors.primary.main} />;
  };
  const listingHandler = ({item, index}: ListingHandlerProps) => {
    return <HomeListing index={index} item={item} />;
  };
  const renderHeader = useMemo(() => {
    return <HomeHeader search={search} navigation={navigation} route={route} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.value]);

  const dataToShow = filteredProducts.slice(0, (page + 1) * 12);
  const shouldEnableInfiniteScroll = dataToShow.length >= 10;

  return (
    <View style={styles.container}>
      {!pageLoading && (
        <FlatList
          disableVirtualization={true}
          showsVerticalScrollIndicator={false}
          data={dataToShow}
          onScrollBeginDrag={() => Keyboard.dismiss()}
          onEndReached={
            shouldEnableInfiniteScroll ? () => loadData(page) : null
          }
          onEndReachedThreshold={0.5}
          ListHeaderComponent={renderHeader}
          nestedScrollEnabled={true}
          ListFooterComponent={renderFooter}
          renderItem={listingHandler}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      )}
      {pageLoading && (
        <View style={styles.pageLoadingContainer}>
          <ActivityIndicator color={colors.primary.main} />
        </View>
      )}
    </View>
  );
};

export default Home;
