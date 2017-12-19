import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        source={require('./images/icon.png')}
        style={styles.icon}
      />

      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: propTypes.string,
  onPress: propTypes.func,
};

export default ClearButton;
