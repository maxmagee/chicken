import { createStackNavigator } from 'react-navigation';

import AuthenticatedMainTabNavigator from './authenticated/AuthenticatedMainTabNavigator';
import AuthenticationNavigator from './AuthenticationNavigator';
import CustomerSupportModalNavigator from './CustomerSupportModalNavigator';
import MainTabNavigator from './MainTabNavigator';
import TermsAndConditionsModalNavigator from './TermsAndConditionsModalNavigator';

const RootModalNavigator = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator },
    AuthenticatedMainTabNavigator: {
      screen: AuthenticatedMainTabNavigator,
      navigationOptions: () => ({
        gesturesEnabled: false
      })
    },
    TermsAndConditionsModalNavigator: {
      screen: TermsAndConditionsModalNavigator,
      navigationOptions: () => ({
        // gesturesEnabled: false  // uncomment this to prevent swipe to dismiss
      })
    },
    AuthenticationNavigator: {
      screen: AuthenticationNavigator,
      navigationOptions: () => ({
        // gesturesEnabled: false  // uncomment this to prevent swipe to dismiss
      })
    },
    CustomerSupportModalNavigator: {
      screen: CustomerSupportModalNavigator,
      navigationOptions: () => ({
        // gesturesEnabled: false  // uncomment this to prevent swipe to dismiss
      })
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'MainTabNavigator'
  }
);

export default RootModalNavigator;
