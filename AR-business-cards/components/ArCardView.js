import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroFlexView,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroBox,
} from "@viro-community/react-viro";

export default ({ cardDetails }) => {
  function BusinessCardScene() {
    function onInitialized(state, reason) {
      console.log("Business Card", state, reason);
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        console.log(cardDetails);
      } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
        console.log("Tracking Lost!");
      }
    }

    ViroARTrackingTargets.createTargets({
      arMarker: {
        source: require("./AR_Marker.png"),
        physicalWidth: 1,
        orientation: "Up",
      },
    });

    const anchorFound = () => {
      console.log("Anchor Found!");
    };

    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        <ViroARImageMarker target={"arMarker"} onAnchorFound={anchorFound}>
          <ViroFlexView
            position={[0, 0, -1.01]}
            height={2.1}
            width={3.1}
            backgroundColor={"#FF7000"}
            style={styles.f1}
          ></ViroFlexView>
          <ViroFlexView
            position={[0, 0, -1]}
            height={2}
            width={3}
            backgroundColor={cardDetails.colour}
            style={styles.f1}
          ></ViroFlexView>
          <ViroText
            text={cardDetails.title}
            textClipMode="None"
            scale={[0.6, 0.6, 0.6]}
            textLineBreakMode="CharWrap"
            style={styles.CardTextStyle}
            width={3}
            position={[-0.2, 0.6, -0.9]}
          />
          <ViroText
            text={cardDetails.content}
            textClipMode="None"
            scale={[0.4, 0.4, 0.4]}
            textLineBreakMode="CharWrap"
            style={styles.CardTextStyle}
            width={3}
            position={[-0.2, 0, -0.9]}
          />
        </ViroARImageMarker>
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
    textAlign: "left",
  },
});
