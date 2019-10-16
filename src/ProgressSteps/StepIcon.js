import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

class StepIcon extends Component {
  render() {
    let styles;

    if (this.props.isActiveStep) {
      styles = {
        circleStyle: {
          width: 15,
          height: 15,
          borderRadius: 20,
          backgroundColor: this.props.activeStepIconColor,
          borderColor: this.props.activeStepIconBorderColor,
          borderWidth: 5
        },
        circleText: {
          alignSelf: "center",
          fontSize: 0
        },
        labelText: {
          textAlign: "center",
          flexWrap: "wrap",
          width: 100,
          paddingTop: 2,
          fontFamily: this.props.labelFontFamily,
          color: this.props.activeLabelColor
        },
        leftBar: {
          position: "absolute",
          top: 15 / 2.22,
          left: 0,
          right: 35 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: "#434A9C",
          marginRight: 2
        },
        rightBar: {
          position: "absolute",
          top: 15 / 2.22,
          right: 0,
          left: 35 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 2
        },
        stepNum: {
          color: this.props.activeStepNumColor
        }
      };
    } else if (this.props.isCompletedStep) {
      styles = {
        circleStyle: {
          width: 15,
          height: 15,
          borderRadius: 18,
          backgroundColor: this.props.completedStepIconColor
        },
        circleText: {
          alignSelf: "center",
          top: 18 / 2
        },
        labelText: {
          textAlign: "center",
          flexWrap: "wrap",
          width: 100,
          paddingTop: 2,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4
        },
        leftBar: {
          position: "absolute",
          top: 15 / 2.22,
          left: 0,
          right: 35 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: "#434A9C",
          marginRight: 2
        },
        rightBar: {
          position: "absolute",
          top: 15 / 2.22,
          right: 0,
          left: 35 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: "#434A9C",
          marginLeft: 2
        },
        stepNum: {
          color: this.props.completedStepNumColor
        }
      };
    } else {
      styles = {
        circleStyle: {
          width: 15,
          height: 15,
          borderRadius: 18,
          borderColor: "#434A9C",
          borderWidth: 0.5,
          backgroundColor: "#fff"
        },
        circleText: {
          alignSelf: "center",
          top: 18 / 2
        },
        labelText: {
          textAlign: "center",
          flexWrap: "wrap",
          width: 100,
          paddingTop: 2,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4
        },
        leftBar: {
          position: "absolute",
          top: 15 / 2.22,
          left: 0,
          right: 35 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginRight: 2
        },
        rightBar: {
          position: "absolute",
          top: 15 / 2.22,
          right: 0,
          left: 35 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 2
        },
        stepNum: {
          color: this.props.disabledStepNumColor,
          fontSize: 0
        }
      };
    }

    return (
      <View
        style={{ flexDirection: "column", alignItems: "center", width: 70 }}
      >
        <View style={styles.circleStyle}>
          {/* <Text style={styles.circleText}>
            {this.props.isCompletedStep ? (
              <Text style={{ color: this.props.completedCheckColor }}>
                &#10003;
              </Text>
            ) : (
              <Text style={styles.stepNum}>{this.props.stepNum}</Text>
            )}
          </Text> */}
        </View>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {!this.props.isFirstStep && <View style={styles.leftBar} />}
        {!this.props.isLastStep && <View style={styles.rightBar} />}
      </View>
    );
  }
}

StepIcon.propTypes = {
  stepCount: PropTypes.number.isRequired,
  // stepNum: PropTypes.number.isRequired,
  // label: PropTypes.string.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,

  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  activeStepIconBorderColor: PropTypes.string,

  progressBarColor: PropTypes.string,
  completedProgressBarColor: PropTypes.string,

  activeStepIconColor: PropTypes.string,
  disabledStepIconColor: PropTypes.string,
  completedStepIconColor: PropTypes.string,

  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  activeLabelColor: PropTypes.string,

  activeStepNumColor: PropTypes.string,
  completedStepNumColor: PropTypes.string,
  disabledStepNumColor: PropTypes.string,

  // activeStepIconSize: PropTypes.number,
  // completedStepIconSize: PropTypes.number,
  // disabledStepIconSize: PropTypes.number,

  completedCheckColor: PropTypes.string
};

StepIcon.defaultProps = {
  borderWidth: 6,
  borderStyle: "solid",
  activeStepIconBorderColor: "#4BB543",

  progressBarColor: "#ebebe4",
  completedProgressBarColor: "#4BB543",

  activeStepIconColor: "transparent",
  completedStepIconColor: "#4BB543",
  disabledStepIconColor: "#ebebe4",

  labelColor: "lightgray",
  activeLabelColor: "#4BB543",

  activeStepNumColor: "black",
  completedStepNumColor: "black",
  disabledStepNumColor: "white",

  // activeStepIconSize: 40,
  // completedStepIconSize: 40,
  // disabledStepIconSize: 40,

  completedCheckColor: "white"
};

export default StepIcon;
