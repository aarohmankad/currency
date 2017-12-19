import React from 'react';
import propTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('./images/gear.png')}
        resizeMode="contain"
        style={styles.icon}
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: propTypes.func,
};

export default Header;
