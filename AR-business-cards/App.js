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
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      {currentUser ? (
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
      ) : (
        <NavigationContainer>
          <LoginStack.Navigator>
            <LoginStack.Screen name="Login">
              {(props) => (
                <UserLoginPage {...props} setCurrentUser={setCurrentUser} />
              )}
            </LoginStack.Screen>
          </LoginStack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
const Stack = createNativeStackNavigator();

const LoginStack = createNativeStackNavigator();
