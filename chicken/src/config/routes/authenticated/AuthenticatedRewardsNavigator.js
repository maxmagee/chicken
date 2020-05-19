import { createStackNavigator } from 'react-navigation-stack';

import { globalStyles } from '../../globalStyles';

import RewardsScreen from '../../../screens/authenticated/rewardsTab/RewardsScreen';

const AuthenticatedRewardsNavigator = createStackNavigator({
  Rewards: {
    screen: RewardsScreen,
    navigationOptions: () => ({
      title: 'Rewards',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: globalStyles.navigationHeaderStyle
    })
  }
});

export default AuthenticatedRewardsNavigator;
