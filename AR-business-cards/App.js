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

  return (
    <>
      {currentUser ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              options={{ title: `Hello ${currentUser}` }}
            >
              {(props) => (
                <HomePage {...props} setCurrentUser={setCurrentUser} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="QRScanner"
              component={QRScanner}
              options={{ title: `Scan a QR code` }}
            />
            <Stack.Screen
              name="QRGenerator"
              options={{ title: `View your cards` }}
            >
              {(props) => <QRGenerator {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen name="EditCard" options={{ title: `Make a card` }}>
              {(props) => <CreateEdit {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen
              name="ArCardView"
              component={ArCardView}
              options={{ title: `Ar card view` }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <LoginStack.Navigator>
            <LoginStack.Screen name="Login" options={{ title: `Welcome` }}>
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
