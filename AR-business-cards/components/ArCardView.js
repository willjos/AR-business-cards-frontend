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
} from "@viro-community/react-viro";
// import iconLogo from "./assets/icon.png";

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

    // ViroARTrackingTargets.createTargets({
    //   iconLogo: {
    //     source: require(iconLogo),
    //     physicalWidth: 0.165,
    //     type: "Image",
    //   },
    // });

    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        {/* <ViroARImageMarker target="iconLogo"> */}
        <ViroFlexView
          position={[0, 0, -5]}
          height={2}
          width={3}
          backgroundColor={cardDetails.colour}
          style={styles.f1}
        >
          <ViroText
            text={cardDetails.title}
            textClipMode="None"
            scale={[0.5, 0.5, 0.5]}
            textLineBreakMode="CharWrap"
            style={styles.CardTextStyle}
          />
          <ViroText
            text={cardDetails.content}
            textClipMode="None"
            scale={[0.5, 0.5, 0.5]}
            textLineBreakMode="CharWrap"
            style={styles.CardTextStyle}
          />
        </ViroFlexView>
        {/* </ViroARImageMarker> */}
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
