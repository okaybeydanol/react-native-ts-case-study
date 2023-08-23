import React from 'react';
import {StatusBar, View} from 'react-native';

// Component
import Header from '@src/components/UI/Header';
import Filter from '@src/components/Filter';

// Constant
import {colors} from '@src/constants/colors';

// Style
import styles from './style';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.constant.white}
      />
      <Header
        style={styles.header}
        presentation={'close'}
        leftOptions={{
          shown: true,
          strokeOptions: {
            color: colors.constant.dark,
            width: 2,
          },
          width: 20,
          height: 20,
        }}
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'Filter',
          style: styles.headerText,
        }}
      />
      <Filter />
    </View>
  );
};

export default FilterScreen;
