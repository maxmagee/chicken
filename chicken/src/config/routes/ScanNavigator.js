import { createStackNavigator } from 'react-navigation';

import { globalStyles } from '../globalStyles';

import ScanSignedOutScreen from '../../screens/scanTab/ScanSignedOutScreen';

const ScanNavigator = createStackNavigator({
  ScanSignedOut: {
    screen: ScanSignedOutScreen,
    navigationOptions: () => ({
      title: 'Scan',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: globalStyles.navigationHeaderStyle
    })
  }
});

export default ScanNavigator;
