import React from 'react';
import PropTypes from 'prop-types';

import holdingPhone from '../../../assets/backgrounds/holding-phone.png';

import GeneralizedSignedOutScreen from '../shared/GeneralizedSignedOutScreen';

const ScanSignedOutScreen = () => (
  <GeneralizedSignedOutScreen
    callout="Scan to pay and earn rewards"
    image={holdingPhone}
    mainText={`Scan your QR code and earn points with every purchase.`} // eslint-disable-line
  />
);

ScanSignedOutScreen.propTypes = {
  navigation: PropTypes.object
};

export default ScanSignedOutScreen;
