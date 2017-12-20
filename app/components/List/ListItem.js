import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({ text, selected, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>

      <Icon selected={selected} />
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: propTypes.string,
  selected: propTypes.bool,
  onPress: propTypes.func,
};

export default ListItem;
