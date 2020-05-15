import { createStackNavigator } from 'react-navigation-stack';

import { globalStyles } from '../../globalStyles';

import ScanScreen from '../../../screens/authenticated/scanTab/ScanScreen';

const AuthenticatedScanNavigator = createStackNavigator({
  Scan: {
    screen: ScanScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title', 'Scan'),
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: globalStyles.navigationHeaderStyle
    })
  }
});

export default AuthenticatedScanNavigator;
