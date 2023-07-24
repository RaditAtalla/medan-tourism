import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './src/routes/Routes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Routes />
  );
};

export default App;
