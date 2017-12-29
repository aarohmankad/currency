import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({
  text,
  visible = true,
  selected = false,
  onPress,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>

      <Icon selected={selected} visible={visible} background={iconBackground} />
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: propTypes.string,
  visible: propTypes.bool,
  selected: propTypes.bool,
  onPress: propTypes.func,
  customIcon: propTypes.element,
  iconBackground: propTypes.string,
};

export default ListItem;
