import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({ text, selected, onPress, customIcon = null }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>

      <Icon selected={selected} />
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: propTypes.string,
  selected: propTypes.bool,
  onPress: propTypes.func,
  customIcon: propTypes.element,
};

export default ListItem;
