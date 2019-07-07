import React, { Component } from "react";
import Icon from "react-native-vector-icons/Feather";
import { View, TouchableOpacity } from "react-native";

// import { Container } from './styles';

export default class Direct extends Component {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Icon name="send" size={24} color={"#000000"} />
      </TouchableOpacity>
    )
  };
  render() {
    return <View />;
  }
}
