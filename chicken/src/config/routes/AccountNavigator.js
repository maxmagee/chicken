import { createStackNavigator } from 'react-navigation-stack';

import { globalStyles } from '../globalStyles';

import AccountSignedOutScreen from '../../screens/accountTab/AccountSignedOutScreen';

const AccountNavigator = createStackNavigator({
  AccountSignedOut: {
    screen: AccountSignedOutScreen,
    navigationOptions: () => ({
      title: 'Account',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: globalStyles.navigationHeaderStyle
    })
  }
});

export default AccountNavigator;
