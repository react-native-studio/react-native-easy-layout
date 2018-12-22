import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import PropTypes from 'prop-types';
import util from "./util";

export default class Container extends Component {
  static propTypes = {
    margin: PropTypes.any,
    padding: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    elevation: PropTypes.string,
    borderRadius: PropTypes.any,
    border: PropTypes.any,
  }

  static defaultProps = {
    elevation: 0,
    margin: {},
    padding: {},
    borderRadius: {},
    border:{}
  }


  getPlatformElevation(elevation){
    if(Platform.OS == "android")return { elevation }
    return elevation == 0 ? {}
      : {
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: elevation,
        shadowOffset: {
          height: 2,
          width: 0,
        },
        zIndex: 100,
      }
  }

  render() {
    const {width, height, color,margin,padding,border,borderRadius} = this.props;
    let style = {
      ...util.getStyle(margin,"margin"),
      ...util.getStyle(padding,'padding'),
      ...util.getStyle(border, "border"),
      ...util.getStyle(borderRadius,"border","Radius"),
      ...this.getPlatformElevation(this.props.elevation),
    }
    width && (style.width = width);
    height && (style.height = height);
    color && (style.backgroundColor = color)
    return (
      <View
        style={style}
        children={this.props.children}
      />
    )
  }
}
