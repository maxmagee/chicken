import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../globalStyles';

import ScanScreen from '../../../screens/authenticated/scanTab/ScanScreen';

const AuthenticatedScanNavigator = createStackNavigator({
  Rewards: {
    screen: ScanScreen,
    navigationOptions: () => ({
      title: 'Scan',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground
      }
    })
  }
});

export default AuthenticatedScanNavigator;
