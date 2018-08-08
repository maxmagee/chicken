import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../config/globalStyles';

import MyOrderScreen from '../../screens/myOrderTab/MyOrderScreen';

const MyOrderNavigator = createStackNavigator({
  MyOrder: {
    screen: MyOrderScreen,
    navigationOptions: () => ({
      title: 'My Order',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground
      }
    })
  }
});

export default MyOrderNavigator;
