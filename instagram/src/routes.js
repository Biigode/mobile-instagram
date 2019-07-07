import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import React from "react-native";
import { Text, TouchableOpacity } from "react-native";

import Feed from "./pages/feed";
import New from "./pages/new";
import Direct from "./pages/direct";

export default createAppContainer(
  createStackNavigator(
    {
      Feed,
      Direct
    },
    {
      defaultNavigationOptions: {
        headerTitle: "Instagram"
      },
      mode: "modal"
    }
  ),
  createBottomTabNavigator({ New })
);
