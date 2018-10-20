import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './src/screens/home/home.js'
import Detail from './src/screens/detail/detail.js'

const AppNavigator = createStackNavigator({
  Home: 
  {
      screen: Home,
      navigationOptions:
      {
         title: 'Home',
         header: null
      }
  },
  Detail :
  {
      screen: Detail,
      navigationOptions:
      {
         title: 'Detalles',
         header: null
      }
   },
},
{
   initialRouteName: 'Home'
});

export default AppNavigator;