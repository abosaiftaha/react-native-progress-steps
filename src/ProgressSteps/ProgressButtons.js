import React from "react";
import { View } from "react-native";

const ProgressButtons = props => (
  <View>
    <View style={{ marginHorizontal: 27 }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
