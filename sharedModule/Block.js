import React, {Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class Block extends Component {
  render() {
    return (
      <Text>
        This is a mesasge from {this.props.message}!
      </Text>
    );
  }
}

export class Navbar extends Component {
  render() {
    return (
      <View style={navbarStyle.container}>
        <Text style={navbarStyle.item}>
          HOME
        </Text>
        <Text style={navbarStyle.item}>
          CATEGORY
        </Text>
        <Text style={navbarStyle.item}>
          PRODUCT
        </Text>
        <Text style={navbarStyle.item}>
          ABOUT ME
        </Text>
      </View>
    );
  }
}

const navbarStyle = StyleSheet.create({
  // fill in the css for navbar here
  container : {
    height : 50,
    flexDirection : 'row',
    alignItems: 'flex-start',
    backgroundColor: 'powderblue',
  },

  item : {
    margin : 10,
  }
});
