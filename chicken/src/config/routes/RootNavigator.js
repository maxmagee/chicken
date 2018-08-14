import { createStackNavigator } from 'react-navigation';

import AuthenticationNavigator from './AuthenticationNavigator';
import MainTabNavigator from './MainTabNavigator';
import TermsAndConditionsNavigator from './TermsAndConditionsNavigator';

const RootNavigator = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator },
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
    mode: 'modal'
  }
);

export default RootNavigator;
