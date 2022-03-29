import {View, Text} from 'react-native';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <View flex={1}>
        <View flex={1}>
          <Home />
        </View>

        <View flex={1}>
          <Profile />
        </View>
      </View>
    </Provider>
  );
}
