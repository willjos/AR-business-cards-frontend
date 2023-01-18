import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroFlexView,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroSpinner,
} from "@viro-community/react-viro";

export default ({ cardDetails }) => {
  const [markerFound, setMarkerFound] = useState(false);

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
      setMarkerFound(true);
      console.log("Anchor Found!");
    };

    useEffect(() => {}, [markerFound]);

    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        {!markerFound && <ViroSpinner position={[0, 0, -2]} type={"light"} />}
        <ViroARImageMarker target={"arMarker"} onAnchorFound={anchorFound}>
          <ViroFlexView
            position={[0, -0.01, 0]}
            rotation={[-90, 0, 0]}
            height={2.1}
            width={3.1}
            backgroundColor={"#FF7000"}
            style={styles.f1}
          ></ViroFlexView>
          <ViroFlexView
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            height={2}
            width={3}
            backgroundColor={cardDetails.colour}
            style={styles.f1}
          ></ViroFlexView>
          <ViroText
            text={cardDetails.title}
            textClipMode="ClipToBounds"
            scale={[0.6, 0.6, 0.6]}
            textLineBreakMode="CharWrap"
            style={styles.CardTextStyle}
            width={4}
            height={1}
            extrusionDepth={3}
            position={[-0.23, 0.01, -0.65]}
            rotation={[-90, 0, 0]}
          />
          <ViroText
            text={cardDetails.content}
            textClipMode="ClipToBounds"
            scale={[0.4, 0.4, 0.4]}
            textLineBreakMode="CharWrap"
            style={styles.CardTextStyle}
            width={5}
            height={3}
            extrusionDepth={2.3}
            position={[0, 0.01, 0.25]}
            rotation={[-90, 0, 0]}
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
