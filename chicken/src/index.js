import EStyleSheet from 'react-native-extended-stylesheet';

import RootNavigator from './config/routes/RootNavigator';

// Need the build call so the rest of the EStyleSheet references all work
EStyleSheet.build({
  // $outline: 1
});

export default RootNavigator;
