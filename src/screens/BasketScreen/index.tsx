import React from 'react';
import {View} from 'react-native';

// Component
import Basket from '@src/components/Basket';

// Style
import styles from './style';
import Header from '@src/components/UI/Header';

const BasketScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        leftOptions={{
          shown: false,
        }}
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'E-Market',
          style: styles.headerText,
          containerStyle: styles.headerContainerText,
        }}
      />
      <Basket />
    </View>
  );
};

export default BasketScreen;
