import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export class MainInput extends Component {
  constructor(props){
    super(props);
    // you can set a lot of state here
    this.state = {text: 'this is the original text'};
  }

  render() {
    return (
      <View>
        <TextInput style={{height: 40}} placeholder="Type something here."     onSubmitEditing={(text) => this.setState({text})}/>
        <Text style = {{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}
