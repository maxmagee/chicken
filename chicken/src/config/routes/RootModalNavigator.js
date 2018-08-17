import { createStackNavigator } from 'react-navigation';

import AuthenticatedMainTabNavigator from './authenticated/AuthenticatedMainTabNavigator';
import AuthenticationNavigator from './AuthenticationNavigator';
import MainTabNavigator from './MainTabNavigator';
import TermsAndConditionsNavigator from './TermsAndConditionsNavigator';

const RootModalNavigator = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator },
    AuthenticatedMainTabNavigator: {
      screen: AuthenticatedMainTabNavigator,
      navigationOptions: () => ({
        gesturesEnabled: false
      })
    },
    TermsAndConditionsNavigator: {
      screen: TermsAndConditionsNavigator,
      navigationOptions: () => ({
        // gesturesEnabled: false  // uncomment this to prevent swipe to dismiss
      })
    },
    AuthenticationNavigator: {
      screen: AuthenticationNavigator,
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
