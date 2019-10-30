import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import back from "../../assets/backArrow.png";
import _ from "lodash";
import PropTypes from "prop-types";

import StepIcon from "./StepIcon";

class ProgressSteps extends Component {
  state = {
    stepCount: 0,
    activeStep: this.props.activeStep || 0
  };

  componentDidMount() {
    this.setState({ stepCount: React.Children.count(this.props.children) });
  }

  getChildProps() {
    return { ...this.props, ...this.state };
  }

  renderStepIcons = () => {
    let step = [];

    _.times(this.state.stepCount, i => {
      step.push(
        <View key={i}>
          <View>
            <StepIcon
              {...this.getChildProps()}
              stepNum={i + 1}
              label={this.props.children[i].props.label}
              isFirstStep={i === 0}
              isLastStep={i === this.state.stepCount - 1}
              isCompletedStep={i < this.state.activeStep}
              isActiveStep={i === this.state.activeStep}
            />
          </View>
        </View>
      );
    });

    return step;
  };

  // Callback function from ProgressStep that passes current step.
  setActiveStep = step => {
    this.setState({ activeStep: step });
  };

  backStep = step => {
    this.setState({ activeStep: step });
  };

  render() {
    const styles = {
      stepIcons: {
        // position: "relative",
        justifyContent: "space-between",
        alignSelf: "center",
        flexDirection: "row",
        top: 30,
        marginBottom: 50
      },
      back: {
        width: 15,
        height: 15,
        marginTop: 10,
        marginLeft: 20
      }
    };

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() =>
            this.state.activeStep !== 0
              ? this.setState(prevState => ({
                  activeStep: prevState.activeStep - 1
                }))
              : this.setState(prevState => ({
                  activeStep: 0
                }))
          }
        >
          {this.state.activeStep !== 0 ? (
            <Image source={back} style={styles.back} />
          ) : (
            <Text></Text>
          )}
        </TouchableOpacity>
        <View style={styles.stepIcons}>{this.renderStepIcons()}</View>
        <View style={{ flex: 1 }}>
          {React.cloneElement(this.props.children[this.state.activeStep], {
            setActiveStep: this.setActiveStep,
            activeStep: this.state.activeStep,
            stepCount: this.state.stepCount
          })}
        </View>
      </View>
    );
  }
}

export default ProgressSteps;
