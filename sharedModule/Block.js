import React, {Component} from 'react';
import{
  AppRegistry,
  Text,
  View,
} from 'react-native'

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
        <Text>
          HOME
        </Text>

        <Text>
          CATEGORY
        </Text>

        <Text>
          PRODUCT
        </Text>
        <Text>
          ABOUT ME
        </Text>
      </View>
    );
  }
}

const navbarStyle = StyleSheet.create({
  // fill in the css for navbar here
  container : {

  }
});
