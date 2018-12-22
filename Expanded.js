import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
export default class Expanded extends Component{

  static propTypes = {
    flex: PropTypes.number,
  }

  static defaultProps = {
    flex: 1
  }

  render(){
    return (
      <View
        children={this.props.children}
        style={{flex: this.props.flex}}
      />
    )
  }
}
