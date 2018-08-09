import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../config/globalStyles';

import AccountSignedOutScreen from '../../screens/accountTab/AccountSignedOutScreen';

const AccountNavigator = createStackNavigator({
  AccountSignedOut: {
    screen: AccountSignedOutScreen,
    navigationOptions: () => ({
      title: 'Account',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground
      }
    })
  }
});

export default AccountNavigator;
