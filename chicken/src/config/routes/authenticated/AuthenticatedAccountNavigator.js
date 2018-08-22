import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../globalStyles';

import HeaderLeftButton from '../../../components/navigationHeader/HeaderLeftButton';

import AccountSignedInScreen from '../../../screens/authenticated/accountTab/AccountSignedInScreen';
import PastRewardsScreen from '../../../screens/authenticated/accountTab/PastRewardsScreen';
import SettingsScreen from '../../../screens/authenticated/accountTab/SettingsScreen';
import TermsAndConditionsScreen from '../../../screens/accountTab/TermsAndConditionsScreen';
import TransactionHistoryScreen from '../../../screens/accountTab/TransactionHistoryScreen';

const AuthenticatedAccountNavigator = createStackNavigator(
  {
    AccountSignedIn: {
      screen: AccountSignedInScreen,
      navigationOptions: () => ({
        title: 'Account',
        headerBackTitle: null,
        headerTitleStyle: globalStyles.navigationHeaderTitle,
        headerStyle: globalStyles.navigationHeaderStyle
      })
    },
    PastRewards: {
      screen: PastRewardsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Past rewards',
        headerTitleStyle: globalStyles.navigationHeaderTitle,
        headerStyle: globalStyles.navigationHeaderStyle,
        headerTintColor: colors.darkGray,
        headerLeft: <HeaderLeftButton type="back" color={colors.darkGray} navigation={navigation} />
      })
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Settings',
        headerTitleStyle: globalStyles.navigationHeaderTitle,
        headerStyle: globalStyles.navigationHeaderStyle,
        headerTintColor: colors.darkGray,
        headerLeft: <HeaderLeftButton type="back" color={colors.darkGray} navigation={navigation} />
      })
    },
    TermsAndConditions: {
      screen: TermsAndConditionsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Terms & Conditions',
        headerTitleStyle: globalStyles.navigationHeaderTitle,
        headerStyle: globalStyles.navigationHeaderStyle,
        headerTintColor: colors.darkGray,
        headerLeft: <HeaderLeftButton type="back" color={colors.darkGray} navigation={navigation} />
      })
    },
    TransactionHistory: {
      screen: TransactionHistoryScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Transaction History',
        headerTitleStyle: globalStyles.navigationHeaderTitle,
        headerStyle: globalStyles.navigationHeaderStyle,
        headerTintColor: colors.darkGray,
        headerLeft: <HeaderLeftButton type="back" color={colors.darkGray} navigation={navigation} />
      })
    }
  },
  {
    headerMode: 'screen'
  }
);

export default AuthenticatedAccountNavigator;
