import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import { colors, globalStyles } from '../../globalStyles';

import AuthenticatedAccountNavigator from './AuthenticatedAccountNavigator';
import AuthenticatedMyOrderNavigator from './AuthenticatedMyOrderNavigator';
import AuthenticatedRewardsNavigator from './AuthenticatedRewardsNavigator';
import AuthenticatedScanNavigator from './AuthenticatedScanNavigator';

import MenuWelcomeScreen from '../../../screens/menuTab/MenuWelcomeScreen';

const tabIconSize = 26;

const AuthenticatedMainTabNavigator = createBottomTabNavigator(
  {
    AuthenticatedMenuTab: {
      screen: MenuWelcomeScreen,
      navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-restaurant-outline" size={tabIconSize} color={tintColor} />
        )
      }
    },
    AuthenticatedRewardsTab: {
      screen: AuthenticatedRewardsNavigator,
      navigationOptions: {
        tabBarLabel: 'Rewards',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="gift" size={tabIconSize} color={tintColor} />
        )
      }
    },
    AuthenticatedScanTab: {
      screen: AuthenticatedScanNavigator,
      navigationOptions: {
        tabBarLabel: 'Scan',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="qrcode-scan" size={tabIconSize} color={tintColor} />
        )
      }
    },
    AuthenticatedAccountTab: {
      screen: AuthenticatedAccountNavigator,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="account-outline" size={tabIconSize} color={tintColor} />
        )
      }
    },
    AuthenticatedMyOrderTab: {
      screen: AuthenticatedMyOrderNavigator,
      navigationOptions: {
        tabBarLabel: 'My Order',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="bag" size={tabIconSize} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: 'AuthenticatedAccountTab',
    tabBarOptions: {
      activeBackgroundColor: colors.white,
      activeTintColor: colors.red,
      inactiveBackgroundColor: colors.white,
      inactiveTintColor: colors.darkGray,
      labelStyle: globalStyles.bottomTabBarLabel,
      style: {
        backgroundColor: 'white',
        paddingTop: 5,
        height: 50
      }
    },
    navigationOptions: {
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        if (navigation.state.routeName === 'AuthenticatedMenuTab') {
          StatusBar.setBarStyle('light-content');
        } else {
          StatusBar.setBarStyle('dark-content');
        }
        defaultHandler();
      }
    }
  }
);

export default AuthenticatedMainTabNavigator;
