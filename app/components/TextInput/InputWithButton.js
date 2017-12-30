import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = props => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [styles.container];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        editable={editable}
        underlineColorAndroid="transparent"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: propTypes.func,
  buttonText: propTypes.string,
  editable: propTypes.bool,
};

export default InputWithButton;
