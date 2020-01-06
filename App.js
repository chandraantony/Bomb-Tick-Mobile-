import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './src/screens/welcome';
import Category from './src/screens/category';
import  Detail from './src/screens/detail';

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      title: "HOME",
      headerShown : false
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
    title: 'Category',
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
    title: 'Detail',
    headerShown : false
   
    }
  },
}, {
  initialRouteName: 'Welcome'
});

export default createAppContainer(AppNavigator);

