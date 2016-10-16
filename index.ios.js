/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RNPanResponder extends Component {
  constructor(props){
    super(props)
    this.state = {
      bg: 'white',
      bg2: 'white'
    }
  }

  componentWillMount(){
    this._gestureHandlers = {
      //外部正方形在“捕获期”阻止底层时间成为响应者
      onStartShouldSetResponderCapture: () => true,
      onMoveShouldSetResponderCapture: ()=> true,
      onResponderGrant: ()=>{this.setState({bg: 'red'})},
      onResponderMove: ()=>{console.log(123)},
      onResponderRelease: ()=>{this.setState({bg: 'white'})},
    }
    this._gestureHandlers2 = {
      //内部正方形在即时实现了on*ShouldSetResponder也无法成为响应者
      onStartShouldSetResponder: () => true,
      onMoveShouldSetResponder: ()=> true,
      onResponderGrant: ()=>{this.setState({bg2: 'green'})},
      onResponderMove: ()=>{console.log(123)},
      onResponderRelease: ()=>{this.setState({bg2: 'white'})}
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View {...this._gestureHandlers} style={[styles.rect2,{"backgroundColor": this.state.bg}]}>
          <View {...this._gestureHandlers2} style={[styles.rect,{"backgroundColor": this.state.bg2}]}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  rect: {
    width: 100,
    height: 100
  },
  rect2: {
    width: 200,
    height: 200
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNPanResponder', () => RNPanResponder);
