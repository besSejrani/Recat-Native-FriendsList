import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Icon } from 'expo';

import Home from './Home';
import Settings from './Settings';
import Freunde from './Freunde';

const HomeStack = createStackNavigator(
  {
    Home,
    Freunde
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2196f3'
      }
    }
  }
);

const mainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Freunde',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Feather name="home" size={20} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Feather name="settings" size={20} color={tintColor} />
        )
      }
    }
  },

  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#212121',
      style: { backgroundColor: '#2196f3' }
    }
  }
);

const AppContainer = createAppContainer(mainNavigator);

export default AppContainer;
