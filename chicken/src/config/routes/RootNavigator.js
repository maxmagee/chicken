import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const RootNavigator = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

export default RootNavigator;
