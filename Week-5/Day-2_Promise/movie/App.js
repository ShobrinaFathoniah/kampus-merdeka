import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/routers';
import {Provider} from 'react-redux';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
