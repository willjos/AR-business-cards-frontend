import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroFlexView,
} from "@viro-community/react-viro";
// import BusinessCardScene from "./BusinessCard";

export default (props) => {
  function BusinessCardScene() {
    const [businessName, setBusinessName] = useState("Business Name");
    const [businessDetails, setBusinessDetails] = useState("Business Details");

    function onInitialized(state, reason) {
      console.log("Business Card", state, reason);
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        setBusinessName(props.BName);
      } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
        setBusinessName("Tracking Lost!");
      }
    }

    //Implement Fetching Data from the Backend

    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        <ViroFlexView
          position={[0, 0, -5]}
          height={2}
          width={3}
          backgroundColor={"rgba(0,255,255,0.9)"}
          style={styles.f1}
        >
          <ViroText
            text={businessName}
            textClipMode="None"
            scale={[0.5, 0.5, 0.5]}
            textLineBreakMode="CharWrap"
            style={styles.CardTextStyle}
          />
          <ViroText
            text={businessDetails}
            textClipMode="None"
            scale={[0.5, 0.5, 0.5]}
            textLineBreakMode="CharWrap"
            style={styles.CardTextStyle}
          />
        </ViroFlexView>
      </ViroARScene>
    );
  }

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: BusinessCardScene,
      }}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1, justifyContent: "space-evenly" },
  CardTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#000000",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
