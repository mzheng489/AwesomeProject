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
import {Block, Navbar} from './sharedModule/Block.js';
import {MainInput} from './sharedModule/MainInput.js';

class PicFrame extends Component {
  render() {
    return (
      <Text>
        Hello {this.props.text}
      </Text>
    );
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Navbar/>
        <Block style= {styles.welcome} message = "meesage is from michael"/>
        <MainInput />
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
    fontSize:40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
