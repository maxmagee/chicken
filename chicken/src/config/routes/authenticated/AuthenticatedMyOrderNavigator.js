import { createStackNavigator } from 'react-navigation-stack';

import { globalStyles } from '../../globalStyles';

import MyOrderScreen from '../../../screens/authenticated/myOrderTab/MyOrderScreen';

const AuthenticatedMyOrderNavigator = createStackNavigator({
  Rewards: {
    screen: MyOrderScreen,
    navigationOptions: () => ({
      title: 'My Order',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: globalStyles.navigationHeaderStyle
    })
  }
});

export default AuthenticatedMyOrderNavigator;
