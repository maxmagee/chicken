import { createStackNavigator } from 'react-navigation-stack';

import { globalStyles } from '../globalStyles';

import RewardsSignedOutScreen from '../../screens/rewardsTab/RewardsSignedOutScreen';

const RewardsNavigator = createStackNavigator({
  RewardsSignedOut: {
    screen: RewardsSignedOutScreen,
    navigationOptions: () => ({
      title: 'Rewards',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: globalStyles.navigationHeaderStyle
    })
  }
});

export default RewardsNavigator;
