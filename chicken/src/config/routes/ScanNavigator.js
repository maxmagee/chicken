import { createStackNavigator } from 'react-navigation';

import { colors, globalStyles } from '../../config/globalStyles';

import ScanSignedOutScreen from '../../screens/scanTab/ScanSignedOutScreen';

const ScanNavigator = createStackNavigator({
  ScanSignedOut: {
    screen: ScanSignedOutScreen,
    navigationOptions: () => ({
      title: 'Scan',
      headerTitleStyle: globalStyles.navigationHeaderTitle,
      headerStyle: {
        backgroundColor: colors.navigationHeaderBackground
      }
    })
  }
});

export default ScanNavigator;
