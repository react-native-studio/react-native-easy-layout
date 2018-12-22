import React,{Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
export default class Center extends Component{

  render(){
    return (
      <View
        children={this.props.children}
        style={styles.center}
      />
    )
  }

}

const styles = StyleSheet.create({
  center:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})
