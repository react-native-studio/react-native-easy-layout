import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import util from "./util";

export default class Margin extends Component {

  static propTypes = {
    margin: PropTypes.any
  }

  static defaultProps = {
    margin: {}
  }


  render() {
    let { margin } = this.props;
    return (
      <View
        style={{...util.getStyle(margin,"margin")}}
        children = {this.props.children}
      />
    )
  }
}
