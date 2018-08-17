import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../config/constants';

import GradientButton from './GradientButton';
import ShadowButton from './ShadowButton';

const MainActionButton = props => {
  if (props.type === constants.actionButtonTypes.BUTTON_TYPE_RED) {
    return <GradientButton {...props} />;
  } else if (props.type === constants.actionButtonTypes.BUTTON_TYPE_WHITE) {
    return <ShadowButton {...props} />;
  }
};

MainActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    constants.actionButtonTypes.BUTTON_TYPE_RED,
    constants.actionButtonTypes.BUTTON_TYPE_WHITE
  ]).isRequired
};

export default MainActionButton;
