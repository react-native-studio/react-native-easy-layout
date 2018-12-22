import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
export default class Column extends Component{

  static propTypes = {
    mainAxisAlignment: PropTypes.string,
    crossAxisAlignment: PropTypes.string,
  }

  static defaultProps = {
    mainAxisAlignment: require("./AxiosAlignment").cross.start,
    crossAxisAlignment: require("./AxiosAlignment").main.start,
  }

  render(){
    return (
      <View
        children={this.props.children}
        style={styles.column}
      />
    )
  }

}

const styles = StyleSheet.create({
  column:{
    flexDirection: 'column',
  }
})
