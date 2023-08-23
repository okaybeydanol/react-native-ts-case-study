import React from 'react';
import {Keyboard, TouchableNativeFeedback, View} from 'react-native';

// Component
import Home from '@src/components/Home';
import Header from '@src/components/UI/Header';

// Type
import {HomeRootStackScreenProps} from '@src/navigation/types';

// Style
import styles from './style';

const HomeScreen = ({
  navigation,
  route,
}: HomeRootStackScreenProps<'TabNavigator', 'HomeScreen'>) => {
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
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
        <Home navigation={navigation} route={route} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default HomeScreen;
