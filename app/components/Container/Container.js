import React from 'react';
import propTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const Container = ({ children, primaryColor }) => {
  const containerStyles = [styles.container, { backgroundColor: primaryColor }];
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  children: propTypes.any,
  primaryColor: propTypes.string,
};

export default Container;
