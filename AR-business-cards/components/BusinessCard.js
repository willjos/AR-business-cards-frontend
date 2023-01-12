import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
} from "@viro-community/react-viro";

export default function BusinessCardScene() {
  const [text, setText] = useState("Initializing Business Card...");

  function onInitialized(state, reason) {
    console.log("Business Card", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Card Goes Here");
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      setText("Tracking Lost!");
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        // style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
}
