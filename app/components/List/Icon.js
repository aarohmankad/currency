import React from 'react';
import propTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({
  visible = true,
  selected = false,
  background = styles.$backgroundIconColor,
}) => {
  let iconStyles = styles.iconContainer;

  if (visible) {
    iconStyles = [iconStyles, { backgroundColor: background }];
  }

  return (
    <View style={iconStyles}>
      {selected && visible ? (
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
  visible: propTypes.bool,
  selected: propTypes.bool,
  background: propTypes.string,
};

export default Icon;
