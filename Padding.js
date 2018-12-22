import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';


import util from "./util";

export default class Padding extends Component {

  static propTypes = {
    padding: PropTypes.any
  }

  static defaultProps = {
    padding: {}
  }


  render() {
    let { padding } = this.props;
    return (
      <View
        style={{...util.getStyle(padding, "padding")}}
        children = {this.props.children}
      />
    )
  }
}
