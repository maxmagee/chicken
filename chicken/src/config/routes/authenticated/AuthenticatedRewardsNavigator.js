import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../../config/globalStyles';

import RewardsScreen from '../../../screens/authenticated/rewardsTab/RewardsScreen';

const AuthenticatedRewardsNavigator = createStackNavigator({
  Rewards: {
    screen: RewardsScreen,
    navigationOptions: () => ({
      title: 'Rewards',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground
      }
    })
  }
});

export default AuthenticatedRewardsNavigator;
