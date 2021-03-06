import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AuthenticatedMainTabNavigator from './authenticated/AuthenticatedMainTabNavigator';
import AuthenticationNavigator from './AuthenticationNavigator';
import CustomerSupportModalNavigator from './CustomerSupportModalNavigator';
import LocationNavigator from './LocationNavigator';
import MainTabNavigator from './MainTabNavigator';
import TermsAndConditionsModalNavigator from './TermsAndConditionsModalNavigator';

const RootModalNavigator = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator },
    AuthenticatedMainTabNavigator: {
      screen: AuthenticatedMainTabNavigator,
      navigationOptions: () => ({
        gestureEnabled: false
      })
    },
    TermsAndConditionsModalNavigator: {
      screen: TermsAndConditionsModalNavigator,
      navigationOptions: () => ({
        // gestureEnabled: false  // uncomment this to prevent swipe to dismiss
      })
    },
    AuthenticationNavigator: {
      screen: AuthenticationNavigator,
      navigationOptions: () => ({
        // gestureEnabled: false  // uncomment this to prevent swipe to dismiss
      })
    },
    CustomerSupportModalNavigator: {
      screen: CustomerSupportModalNavigator,
      navigationOptions: () => ({
        // gestureEnabled: false  // uncomment this to prevent swipe to dismiss
      })
    },
    LocationNavigator: {
      screen: LocationNavigator,
      navigationOptions: () => ({
        // gestureEnabled: false  // uncomment this to prevent swipe to dismiss
      })
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'MainTabNavigator'
  }
);

export default createAppContainer(RootModalNavigator);
