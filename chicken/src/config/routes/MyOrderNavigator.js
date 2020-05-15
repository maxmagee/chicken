import { createStackNavigator } from 'react-navigation-stack';

import { globalStyles } from '../globalStyles';

import MyOrderScreen from '../../screens/myOrderTab/MyOrderScreen';

const MyOrderNavigator = createStackNavigator({
  MyOrder: {
    screen: MyOrderScreen,
    navigationOptions: () => ({
      title: 'My Order',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: globalStyles.navigationHeaderStyle
    })
  }
});

export default MyOrderNavigator;
