import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

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
        headerLeft: () => {
          return <HeaderLeftButton type="close" color={colors.darkBlue} navigation={navigation} />;
        },
        headerStyle: globalStyles.getModalNavigationHeaderStyle(colors.lightBlue),
        title: ''
      })
    },
    EmailSignIn: {
      screen: EmailSignInScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => {
          return (<HeaderLeftButton type="back" color={colors.darkBlue} navigation={navigation} />);
        },
        headerStyle: globalStyles.getModalNavigationHeaderStyle(colors.lightBlue),
        title: ''
      })
    },
    EmailSignUp: {
      screen: EmailSignUpScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => {
          return (<HeaderLeftButton type="back" color={colors.darkGray} navigation={navigation} />);
        },
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
