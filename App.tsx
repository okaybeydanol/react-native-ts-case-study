import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Store
import {store, persistor} from '@src/store';

// Navigation
import Navigation from './src/navigation';
import {colors} from '@src/constants/colors';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primary.main}
        />
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
