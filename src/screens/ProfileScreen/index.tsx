import React from 'react';
import {View} from 'react-native';

// Component
import Profile from '@src/components/Profile';

// Style
import styles from './style';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
};

export default ProfileScreen;
