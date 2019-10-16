import React from "react";
import { View } from "react-native";

const ProgressButtons = props => (
  <View style={{ flexDirection: "row" }}>
    <View style={{ position: "absolute", left: 60, bottom: 40 }}>
      {props.renderPreviousButton()}
    </View>
    <View style={{ position: "absolute", marginHorizontal: 27, bottom: 40 }}>
      {props.renderNextButton()}
    </View>
  </View>
);

export default ProgressButtons;
