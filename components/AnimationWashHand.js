import React, { Component } from "react";
import LottieView from "lottie-react-native";
import WashHand from "../assets/json/wash-hand.json";

export default class AnimationWashHand extends Component {
  render() {
    return (
      <LottieView
        source={WashHand}
        loop
        style={{
          width: "50",
          height: "50",
        }}
      />
    );
  }
}
