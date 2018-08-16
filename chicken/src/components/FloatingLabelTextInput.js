import React, { Component } from 'react';
import { View, Text, TextInput, Animated } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { globalStyles, colors } from '../config/globalStyles';

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
      color:
        props.isValid === false
          ? colors.red
          : this.animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [
                globalStyles.textInput.placeHolder.color,
                globalStyles.textInput.label.color
              ]
            }),
      fontWeight: globalStyles.textInput.label.fontWeight
    };

    return (
      <View style={styles.container}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={[
            globalStyles.textInput.container,
            globalStyles.textInput.text,
            {
              borderBottomColor:
                props.borderBottomColor || globalStyles.textInput.container.borderBottomColor
            }
          ]}
          onFocus={() => {
            // We don't want to override a provided onFocus handler
            // But we do need to provide our own to animate the label
            // So call the one provided, and then call the component's built-in handler
            if (this.props.onFocus) {
              this.props.onFocus();
            }
            this.handleFocus();
          }}
          onBlur={this.handleBlur}
          blurOnSubmit
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
        <Text
          style={[
            styles.bottomLabel,
            { color: props.borderBottomColor || globalStyles.textInput.container.borderBottomColor }
          ]}
        >
          {props.bottomLabel}
        </Text>
      </View>
    );
  }
}

FloatingLabelTextInput.propTypes = {
  borderBottomColor: PropTypes.string,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string
};

const styles = EStyleSheet.create({
  container: {
    paddingTop: 18,
    marginBottom: 10
  },
  bottomLabel: {
    fontFamily: 'Arial',
    fontSize: 11,
    fontWeight: 'bold',
    position: 'absolute',
    left: 0,
    top: 45
  }
});

export default FloatingLabelTextInput;
