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
import HomePage from "./components/HomePage";

export default () => {
  const [currentUser, setCurrentUser] = useState("");
  return (
    <View style={styles.container}>
      <UserLoginPage setCurrentUser={setCurrentUser} />
      <StatusBar style="auto" />
      <HomePage user={currentUser} />
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
