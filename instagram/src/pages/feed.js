import React, { Component } from "react";

import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon2 from "react-native-vector-icons/Feather";

// import { Container } from './styles';

export default class Feed extends Component {
  static navigationOptions = {
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {}}>
        <Icon name="camera" size={24} color={"#000000"} />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => {}}>
        <Icon2 name="send" size={24} color={"#000000"} />
      </TouchableOpacity>
    )
  };
  render() {
    return <View />;
  }
}
