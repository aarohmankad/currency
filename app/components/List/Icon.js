import React from 'react';
import propTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ selected }) => {
  let iconStyles = styles.iconContainer;

  if (selected) {
    iconStyles = [iconStyles, { backgroundColor: styles.$backgroundIconColor }];
  }

  return (
    <View style={iconStyles}>
      {selected ? (
        <Image
          resizeMode="contain"
          source={require('./images/check.png')}
          style={styles.icon}
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  selected: propTypes.bool,
};

export default Icon;
