import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/routers';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
