import React from 'react';
import {View} from 'react-native';

// Component
import Header from '@src/components/UI/Header';
import ProductDetail from '@src/components/ProductDetail';

// Type
import {RootStackScreenProps} from '@src/navigation/types';

// Constant
import {colors} from '@src/constants/colors';

// Style
import styles from './style';
import {useAppSelector} from '@src/store';

const ProductDetailScreen = ({
  route,
}: RootStackScreenProps<'ProductDetailScreen'>) => {
  const products = useAppSelector(state => state.product);
  const filterProduct = React.useMemo(
    () => products.find(v => v.id === route.params.id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [route.params.id],
  );
  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        leftOptions={{
          shown: true,
          fillOptions: {
            color: colors.constant.white,
          },
        }}
        insetTop={true}
        textOptions={{
          shown: true,
          title: `${filterProduct?.brand} ${filterProduct?.name}`,
          style: styles.headerText,
        }}
      />
      {filterProduct && <ProductDetail data={filterProduct} />}
    </View>
  );
};

export default ProductDetailScreen;
