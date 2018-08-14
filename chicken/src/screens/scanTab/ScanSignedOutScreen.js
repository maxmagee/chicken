import React from 'react';
import PropTypes from 'prop-types';

import holdingPhone from '../../../assets/backgrounds/holding-phone.png';

import GeneralizedSignedOutScreen from '../shared/GeneralizedSignedOutScreen';

const ScanSignedOutScreen = props => (
  <GeneralizedSignedOutScreen
    callout="Scan to pay and earn points"
    image={holdingPhone}
    mainText={`Scan your QR code and earn points with every purchase.`} // eslint-disable-line
    navigation={props.navigation}
  />
);

ScanSignedOutScreen.propTypes = {
  navigation: PropTypes.object
};

export default ScanSignedOutScreen;
