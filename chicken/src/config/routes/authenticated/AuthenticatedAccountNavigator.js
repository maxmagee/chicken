import { createStackNavigator } from 'react-navigation';

import { globalStyles } from '../../globalStyles';

import AccountSignedInScreen from '../../../screens/authenticated/accountTab/AccountSignedInScreen';

const AuthenticatedAccountNavigator = createStackNavigator({
  Rewards: {
    screen: AccountSignedInScreen,
    navigationOptions: () => ({
      title: 'Account',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: globalStyles.navigationHeaderStyle
    })
  }
});

export default AuthenticatedAccountNavigator;
