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

class PicFrame extends Component {
  render() {
    return (
      <Text>
        Hello {this.props.text}
      </Text>
    );
  }
}

class Block extends Component {
  render() {
    return (
      <Text style={styles.welcome}>
        this is a {this.props.textToBeFilled}
      </Text>
    );
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <PicFrame text = "michael"/>
        <Block textToBeFilled = "Block is big"/>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
