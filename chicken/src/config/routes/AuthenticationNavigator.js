import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../config/globalStyles';

import HeaderLeftButton from '../../components/navigationHeader/HeaderLeftButton';

import AuthModeScreen from '../../screens/authentication/AuthModeScreen';
import EmailSignInScreen from '../../screens/authentication/EmailSignInScreen';
import EmailSignUpScreen from '../../screens/authentication/EmailSignUpScreen';

const AuthenticationNavigator = createStackNavigator(
  {
    AuthMode: {
      screen: AuthModeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderLeftButton type="close" color={colors.darkBlue} navigation={navigation} />
        ),
        headerStyle: globalStyles.getModalNavigationHeaderStyle(colors.lightBlue)
      })
    },
    EmailSignIn: {
      screen: EmailSignInScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderLeftButton type="back" color={colors.darkBlue} navigation={navigation} />
        ),
        headerStyle: globalStyles.getModalNavigationHeaderStyle(colors.lightBlue)
      })
    },
    EmailSignUp: {
      screen: EmailSignUpScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <HeaderLeftButton type="back" color={colors.darkGray} navigation={navigation} />
        ),
        headerStyle: globalStyles.getModalNavigationHeaderStyle(colors.navigationHeaderBackground),
        headerTitleStyle: globalStyles.navigationHeaderTitle,
        title: 'Join Chick-fil-A One'
      })
    }
  },
  {
    headerMode: 'screen'
  }
);

export default AuthenticationNavigator;
