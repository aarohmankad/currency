import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/themes';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
    primaryColor: propTypes.string,
  };

  handleThemePress = color => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };

  render() {
    const { primaryColor } = this.props;

    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />

        <ListItem
          text="Blue"
          onPress={() => this.handleThemePress(styles.$blue)}
          iconBackground={styles.$blue}
          selected={primaryColor === styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(styles.$orange)}
          iconBackground={styles.$orange}
          selected={primaryColor === styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(styles.$green)}
          iconBackground={styles.$green}
          selected={primaryColor === styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handleThemePress(styles.$purple)}
          iconBackground={styles.$purple}
          selected={primaryColor === styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { primaryColor } = state.themes;

  return {
    primaryColor,
  };
};

export default connect(mapStateToProps)(Themes);
