import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
} from "@viro-community/react-viro";
import UserLoginPage from "./components/UserLoginPage";
import HomePage from "./components/HomePage";
import QRScanner from "./components/QRScanner";
import QRGenerator from "./components/QRGenerator";
import CreateEdit from "./components/CreateEdit";
import ArCardView from "./components/ArCardView";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");

  // conditional render for logged in or not?
  // then use the navigation stack if you are logged in.
  //use another navigation stack fro the login page
  // ->
  // <Stack.Screen
  //   name="Login"
  //   component={UserLoginPage}
  //   options={{ title: "Login here" }}
  // />;
  // function handleQRData(data) {
  //   setQRData(data);
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: `Hello ${currentUser}` }}
        />
        <Stack.Screen
          name="QRScanner"
          component={QRScanner}
          options={{ title: `Hello ${currentUser}` }}
        />
        <Stack.Screen
          name="QRGenerator"
          component={QRGenerator}
          options={{ title: `Hello ${currentUser}` }}
        />
        <Stack.Screen
          name="EditCard"
          component={CreateEdit}
          options={{ title: `Hello ${currentUser}` }}
        />
        <Stack.Screen
          name="ArCardView"
          component={ArCardView}
          options={{ title: `Hello ${currentUser}` }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

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
