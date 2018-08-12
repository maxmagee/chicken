import React from 'react';
import PropTypes from 'prop-types';

import rewards from '../../../assets/backgrounds/rewards.jpg';

import GeneralizedSignedOutScreen from '../shared/GeneralizedSignedOutScreen';

const RewardsSignedOutScreen = props => (
  <GeneralizedSignedOutScreen
    callout="Redeem rewards"
    image={rewards}
    mainText={`Earn points to redeem available rewards. You may even receive some rewards, "just because."`} // eslint-disable-line
    navigation={props.navigation}
  />
);

RewardsSignedOutScreen.propTypes = {
  navigation: PropTypes.object
};

export default RewardsSignedOutScreen;
