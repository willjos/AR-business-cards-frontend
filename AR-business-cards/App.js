import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
} from "@viro-community/react-viro";
import UserLoginPage from "./components/UserLoginPage";
import QRGenerator from "./components/QRGenerator";
export default () => {
  return (
    <View style={styles.container}>
      <QRGenerator code="90" />
    </View>
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
