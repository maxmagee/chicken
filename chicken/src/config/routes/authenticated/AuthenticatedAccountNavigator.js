import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../globalStyles';

import HeaderLeftButton from '../../../components/navigationHeader/HeaderLeftButton';

import AccountSignedInScreen from '../../../screens/authenticated/accountTab/AccountSignedInScreen';
import TermsAndConditionsScreen from '../../../screens/accountTab/TermsAndConditionsScreen';

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
    TermsAndConditions: {
      screen: TermsAndConditionsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Terms & Conditions',
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
