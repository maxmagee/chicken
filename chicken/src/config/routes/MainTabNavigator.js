import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import { colors, globalStyles } from '../globalStyles';

import AccountTabScreen from '../../screens/mainTabs/AccountTabScreen';
import MenuTabScreen from '../../screens/mainTabs/MenuTabScreen';
import MyOrderTabScreen from '../../screens/mainTabs/MyOrderTabScreen';
import RewardsTabScreen from '../../screens/mainTabs/RewardsTabScreen';
import ScanTabScreen from '../../screens/mainTabs/ScanTabScreen';

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
      screen: RewardsTabScreen,
      navigationOptions: {
        tabBarLabel: 'Rewards',
        tabBarIcon: ({ tintColor }) => <Octicons name="gift" size={tabIconSize} color={tintColor} />
      }
    },
    ScanTab: {
      screen: ScanTabScreen,
      navigationOptions: {
        tabBarLabel: 'Scan',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="qrcode-scan" size={tabIconSize} color={tintColor} />
        )
      }
    },
    AccountTab: {
      screen: AccountTabScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="account-outline" size={tabIconSize} color={tintColor} />
        )
      }
    },
    MyOrderTab: {
      screen: MyOrderTabScreen,
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
      labelStyle: {
        fontFamily: globalStyles.bottomTabBarLabel.fontFamily,
        fontSize: globalStyles.bottomTabBarLabel.fontSize
      },
      style: {
        backgroundColor: 'white',
        paddingTop: 5,
        height: 50
      }
    }
  }
);

export default MainTabNavigator;
