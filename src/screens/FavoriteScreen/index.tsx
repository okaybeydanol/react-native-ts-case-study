import React from 'react';
import {View} from 'react-native';

// Component
import Favorite from '@src/components/Favorite';

// Style
import styles from './style';
import Header from '@src/components/UI/Header';

const FavoriteScreen = () => {
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
      <Favorite />
    </View>
  );
};

export default FavoriteScreen;
