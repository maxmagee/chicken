import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../config/globalStyles';

import HeaderLeftButton from '../../components/modalNavigator/HeaderLeftButton';
import AuthModeScreen from '../../screens/authentication/AuthModeScreen';
import EmailSignInScreen from '../../screens/authentication/EmailSignInScreen';

const AuthenticationNavigator = createStackNavigator(
  {
    AuthMode: {
      screen: AuthModeScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: globalStyles.getModalNavigationHeaderStyle(colors.lightBlue),
        headerLeft: (
          <HeaderLeftButton type="close" color={colors.darkBlue} navigation={navigation} />
        )
      })
    },
    EmailSignIn: {
      screen: EmailSignInScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: globalStyles.getModalNavigationHeaderStyle(colors.lightBlue),
        headerLeft: <HeaderLeftButton type="back" color={colors.darkBlue} navigation={navigation} />
      })
    }
  },
  {
    headerMode: 'screen'
  }
);

export default AuthenticationNavigator;
