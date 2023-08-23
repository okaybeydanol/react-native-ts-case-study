import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// Type
import {HomeRootStackScreenProps} from '@src/navigation/types';
import {UseTextInputReturnProps} from '@src/hooks/types';

// Store
import {setFilteredProducts} from '@src/store/slices/filter';
import {useAppDispatch, useAppSelector} from '@src/store';

// Helpers
import {slugify} from '@src/utils/helpers';

// Style
import styles from './style';

const HomeHeader = ({
  navigation,
  search,
}: HomeRootStackScreenProps<'TabNavigator', 'HomeScreen'> & {
  search: UseTextInputReturnProps;
}) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.product);

  const filterHandler = () => {
    dispatch(
      setFilteredProducts({
        product: product.filter(p => {
          return slugify(p.name + ' ' + p.brand + ' ' + p.model).includes(
            slugify(search.value),
          );
        }),
      }),
    );
    navigation.navigate('FilterScreen');
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.inputContainer}>{search.textInputView()}</View>
      <View style={styles.headerViewContainer}>
        <Text style={styles.filters}>Filters:</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={filterHandler}
          style={styles.selectFiltersContainer}>
          <Text style={styles.selectFilters}>Select Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
