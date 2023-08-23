import React from 'react';
import {ScrollView, View} from 'react-native';

// Store
import {useAppSelector} from '@src/store';

// Component
import HomeListing from '@src/components/Home/Listing';

// Style
import styles from './style';

const Favorite = () => {
  const favorite = useAppSelector(state => state.favorite);
  const products = useAppSelector(state => state.product);
  const filteredData = products.filter(item => favorite.includes(item.id));

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.listingContainer}>
        {filteredData.map((item, index) => (
          <HomeListing key={index} item={item} index={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Favorite;
