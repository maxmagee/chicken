import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import { colors, globalStyles } from '../globalStyles';

import AccountNavigator from './AccountNavigator';
import MenuTabScreen from '../../screens/mainTabs/MenuTabScreen';
import MyOrderNavigator from './MyOrderNavigator';
import RewardsNavigator from './RewardsNavigator';
import ScanNavigator from './ScanNavigator';

const tabIconSize = 26;

const MainTabNavigator = createBottomTabNavigator(
  {
    MenuTab: {
      screen: MenuTabScreen,
      navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-restaurant-outline" size={tabIconSize} color={tintColor} />
        )
      }
    },
    RewardsTab: {
      screen: RewardsNavigator,
      navigationOptions: {
        tabBarLabel: 'Rewards',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="gift" size={tabIconSize} color={tintColor} />
        )
      }
    },
    ScanTab: {
      screen: ScanNavigator,
      navigationOptions: {
        tabBarLabel: 'Scan',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="qrcode-scan" size={tabIconSize} color={tintColor} />
        )
      }
    },
    AccountTab: {
      screen: AccountNavigator,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="account-outline" size={tabIconSize} color={tintColor} />
        )
      }
    },
    MyOrderTab: {
      screen: MyOrderNavigator,
      navigationOptions: {
        tabBarLabel: 'My Order',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="bag" size={tabIconSize} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: 'MenuTab',
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
        if (navigation.state.routeName === 'MenuTab') {
          StatusBar.setBarStyle('light-content');
        } else {
          StatusBar.setBarStyle('dark-content');
        }
        defaultHandler();
      }
    }
  }
);

export default MainTabNavigator;
