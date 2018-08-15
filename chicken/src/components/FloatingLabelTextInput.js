import React, { Component } from 'react';
import { View, TextInput, Animated } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { globalStyles } from '../config/globalStyles';

class FloatingLabelTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };

    this.animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  componentDidUpdate() {
    Animated.timing(this.animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200
    }).start();
  }

  handleBlur = () => this.setState({ isFocused: false });

  handleFocus = () => this.setState({ isFocused: true });

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0]
      }),
      fontSize: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [
          globalStyles.textInput.placeHolder.fontSize,
          globalStyles.textInput.label.fontSize
        ]
      }),
      color: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [globalStyles.textInput.placeHolder.color, globalStyles.textInput.label.color]
      }),
      fontWeight: globalStyles.textInput.label.fontWeight
    };

    return (
      <View style={styles.container}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={[globalStyles.textInput.container, globalStyles.textInput.text]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

FloatingLabelTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string
};

const styles = EStyleSheet.create({
  container: {
    paddingTop: 18,
    marginBottom: 10
  }
});

export default FloatingLabelTextInput;
