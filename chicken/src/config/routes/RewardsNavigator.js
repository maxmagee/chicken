import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../config/globalStyles';

import RewardsSignedOutScreen from '../../screens/rewardsTab/RewardsSignedOutScreen';

const RewardsNavigator = createStackNavigator({
  RewardsSignedOut: {
    screen: RewardsSignedOutScreen,
    navigationOptions: () => ({
      title: 'Rewards',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground
      }
    })
  }
});

export default RewardsNavigator;
