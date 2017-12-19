import React from "react";
import propTypes from "prop-types";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";

import styles from "./styles";

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: propTypes.any
};

export default Container;
